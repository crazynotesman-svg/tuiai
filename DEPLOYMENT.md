# TuiAI 上线部署评估清单

> 当前状态：**前端原型完成（静态站 + 模拟支付 + 规则版改写引擎）**
> 目标状态：**全球可访问、能真实计费、能真实改写的生产服务**

---

## 评估结论（先看这个）

| 项目 | 状态 | 距离上线工作量 |
|---|---|---|
| 前端体验（UI / i18n / 付费墙） | ✅ 完成 | 微调即可 |
| 改写引擎 | ⚠️ 规则版 Demo | **必须替换为 LLM 后端** |
| 支付链路 | ⚠️ 模拟 | **必须接真实支付网关** |
| 账号系统 | ❌ 缺失 | 需新建（登录 / 配额 / 订单 / 订阅） |
| 后端 API | ❌ 缺失 | 至少 8 个核心接口 |
| 法律合规 | ❌ 缺失 | 隐私政策 / ToS / Cookie / ICP（中国大陆） |
| 运维监控 | ❌ 缺失 | 日志 / 监控 / 告警 / 容灾 |

**保守估计**：1 名全栈 + 1 名前端 + 1 名设计/产品兼运营，**MVP 上线 4–6 周**，全球付费稳定 8–10 周。

---

## 阶段一 · 把"原型"变成"产品"（第 1–3 周）

### 1. 后端服务（最关键）

**架构建议**：Node.js（Nest）/ Python（FastAPI）+ PostgreSQL + Redis + 对象存储

**必备接口**（≥ 8 个）：
- `POST /api/v1/humanize` — 核心改写（接 LLM）
- `POST /api/v1/auth/login` / `register` / `oauth/google|apple|wechat`
- `GET  /api/v1/user/me` — 配额、订阅状态
- `POST /api/v1/checkout/session` — 创建支付订单
- `POST /api/v1/webhook/stripe` / `webhook/paypal` / `webhook/wechatpay` — 支付回调
- `GET  /api/v1/billing/subscriptions` — 订阅管理（取消 / 续费）
- `POST /api/v1/billing/refund` — 7 天退款

### 2. 改写引擎（核心付费点）

**当前 `humanizeText()` 是规则版**，必须替换为 LLM 调用：

| 方案 | 优势 | 月成本（5 万次改写） |
|---|---|---|
| OpenAI GPT-4o-mini | 质量好，全球可用 | ~$80 |
| Claude 3.5 Haiku | 风格控制好 | ~$100 |
| DeepSeek V3 / Qwen-Max（中国） | 便宜，国内合规 | ~¥200 |
| 自有微调小模型（vLLM） | 长期成本低 | 服务器 ~$300/月起 |

**建议**：海外用 GPT-4o-mini，中国大陆用 DeepSeek，按 IP 路由。
**护城河**：把规则版当作 LLM Prompt 注入的「场景知识」，4 个场景的 system prompt 是你真正的资产。

### 3. 账号与配额系统

- 登录：邮箱密码 + Google OAuth + Apple Sign in + 微信扫码（中国）
- 配额表 `quotas(user_id, date, used, free_limit, credits, pro_until)`
- 防滥用：未登录用 IP+UA+指纹追踪每日 3 次免费

### 4. 数据库表（最小集）

```
users               账号
subscriptions       订阅记录
orders              订单流水
usage_logs          改写日志（计费 + 风控）
quotas              每日额度
refunds             退款记录
```

---

## 阶段二 · 接通真实支付（第 2–4 周）

### 1. 全球支付网关

| 区域 | 推荐 | 备注 |
|---|---|---|
| 全球（含信用卡 / Apple Pay / Google Pay / Stripe Link） | **Stripe** | 全球首选，集成最快 |
| 全球（PayPal） | PayPal Subscription API | |
| 中国大陆 | **微信支付（Native）/ 支付宝（PC + 当面付）** | 需要公司主体 + 营业执照 |
| 欧洲分期 | Klarna（通过 Stripe 即可） | |

### 2. 必须搞定的事

- ✅ 商户主体注册（境外建议香港/新加坡公司；中国需大陆公司 + ICP）
- ✅ Webhook 回调验签 + 幂等（订单状态机：`pending → paid → fulfilled → refunded`）
- ✅ 订阅续费失败重试 + 邮件提醒
- ✅ **退款流程**（首页承诺了 7 天退款，必须实现一键退）
- ✅ 防黑产：双花、Bin 拦截、3DS 验证

---

## 阶段三 · 合规与法务（第 2–3 周·与 1、2 并行）

⚠️ **不做这块上线会被罚**：

- [ ] **隐私政策**（Privacy Policy）— 至少声明：收集字段、存储期、第三方（Stripe/OpenAI 等）、用户删除权
- [ ] **服务条款**（Terms of Service）— 计费、退款、知识产权、免责
- [ ] **Cookie 同意横幅**（欧盟 GDPR、加州 CCPA 必须）
- [ ] **数据处理协议**（DPA）— 若服务欧盟用户
- [ ] **中国大陆**：ICP 备案 + 公安联网备案 + 算法备案（AI 生成类）
- [ ] **内容安全**：用户输入做敏感词过滤（涉政、涉黄、涉暴）
- [ ] **数据不留存**承诺：默认不持久化用户原文（用 Redis TTL 5 分钟存日志即可）

---

## 阶段四 · 域名、托管与部署（第 3–4 周）

### 1. 域名

- 主域名：`tuiai.com` / `de-ai.app` / `humanize.ink`（早点抢，别等竞品抢）
- 中国大陆需备案版：`tuiai.cn`

### 2. 前端托管（推荐组合）

| 方案 | 适合 | 成本 |
|---|---|---|
| **Cloudflare Pages + Workers** | 全球，免费 CDN + Edge Function | $0–$5/月 |
| Vercel | 海外，对 React/Next 友好 | $0–$20/月 |
| 腾讯云 EdgeOne / 阿里云 CDN | 中国大陆加速 | ~¥200/月 |

### 3. 后端托管

| 方案 | 适合 |
|---|---|
| Fly.io / Railway / Render | 海外 MVP，按用量 |
| AWS / GCP | 规模化 |
| 腾讯云 / 阿里云 / 华为云 | 中国大陆 |

### 4. 关键基建

- HTTPS（Let's Encrypt 或托管商自带）
- DDoS / WAF（Cloudflare 免费版起步）
- 文件 / 静态资源走 CDN（OSS + CloudFront / R2）
- DNS 分线路解析（境内境外不同 IP）

---

## 阶段五 · SEO / 增长基建（第 3–5 周）

虽然付费墙做得好，但**冷启动靠 SEO + 内容**：

- [ ] `<title>` / `<meta description>` / OpenGraph / Twitter Card
- [ ] `sitemap.xml` + `robots.txt`
- [ ] 结构化数据（Product / FAQ / Review JSON-LD）
- [ ] Google Search Console + Bing Webmaster
- [ ] Google Analytics 4 + Plausible（备份，部分用户拦截 GA）
- [ ] 转化追踪（订阅 / 单次购买 / 试用→付费漏斗）
- [ ] 着陆页 SEO 文章（"how to remove AI text"、"AI 改写工具"等长尾词）
- [ ] 多语言 hreflang 标签（你已经做了 4 语言，正好加上）

---

## 阶段六 · 用户运营基础设施（第 4–5 周）

- [ ] 邮件服务：SendGrid / Postmark / Resend（密码重置 / 收据 / 续费提醒 / 重激活）
- [ ] 客服：Crisp / Intercom（首页和付费墙都承诺了"专属客服"）
- [ ] 用户反馈表单 / NPS
- [ ] 错误监控：Sentry
- [ ] 业务监控：Grafana + Prometheus 或 Datadog
- [ ] A/B 测试：PostHog 或 Optimizely（付费墙文案、价格点优化必须 A/B）

---

## 阶段七 · 软上线 → 正式上线（第 5–6 周）

### 1. 内测（Closed Beta，约 100 人）
- 让真实用户跑 1 周，重点观察：改写质量、付费流畅度、客诉率
- 监控：响应时间 P95、改写满意度、付费转化率、退款率

### 2. 灰度（Soft Launch）
- Product Hunt / 即刻 / 小红书种子帖
- 限量 1,000 个 Pro 早鸟价（¥99/年）制造 FOMO
- 引入 referral 程序（推荐返利）

### 3. 正式发布（Public Launch）
- 上 Product Hunt 首页（周二）
- 推特 / 小红书 / B 站 KOL 投放
- Google Ads（关键词：humanize ai text）

---

## 风险清单（必须提前规避）

| 风险 | 影响 | 对策 |
|---|---|---|
| LLM 成本失控 | 高 | 按 plan 设字数上限 + 异常告警 |
| 黑产白嫖（无限 IP 用免费额度） | 高 | 设备指纹 + 注册才能用 |
| 退款滥用 | 中 | 限制每个用户终身 1 次无理由退 |
| Stripe 账号被冻结（生成内容服务高风险） | 高 | 准备备用 PSP（Paddle / 2Checkout） |
| 中国大陆 AI 监管 | 高 | 算法备案 + 实名 + 内容审核 |
| 名字 TuiAI 商标 | 中 | 上线前查 USPTO / 中国商标网 |

---

## 第一周可立刻动手的 5 件事

1. **抢域名**：`tuiai.com` + `.cn` + `.app`，今晚就买
2. **注册公司主体**：境外（香港）+ 境内（深圳/上海），并行做
3. **开 Stripe + 微信支付 + 支付宝商户**（审核周期 3–7 天）
4. **写 1 个最小后端**：只跑一个 `/humanize` 接口接 GPT-4o-mini，把前端的 `humanizeText` 改成 `fetch('/api/humanize')`
5. **起草隐私政策 + 服务条款**（用 Termly / Iubenda 生成模板，律师过一遍）

---

## 预算速算（MVP 上线第一个月）

| 项 | 金额 |
|---|---|
| 域名（3 个） | ~¥600 |
| Cloudflare Pages + Workers | $0 |
| 后端 VPS（DigitalOcean 4G） | $24 |
| 数据库（Supabase 免费 → Pro $25） | $25 |
| OpenAI GPT-4o-mini（5 万次） | ~$80 |
| Stripe 手续费 | 流水 2.9% + $0.30/笔 |
| 邮件 / 监控（免费档起步） | $0 |
| 律师过协议（一次性） | ~¥2,000 |
| **合计 MVP 月度运营** | **约 ¥1,200 / 月**（不含人力） |

---

## 一句话总结

> **前端原型已经达标，你现在差的不是"做更多功能"，而是：**
> ① 把规则改写换成 LLM 后端  ② 把模拟支付换成 Stripe + 微信  ③ 把承诺的退款/隐私/客服真正建起来。
> **专注做这 3 件事，4–6 周可以让真实用户付费。其它都可以晚一点。**
