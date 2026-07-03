# TuiAI · 去AI味网站

一键去除 AI 生成内容的"AI 味"，让邮件、会议纪要、汇报、调研报告像人写的一样。

- 前端：纯静态 HTML + JS（`index.html` + `app.js`）
- 后端：Cloudflare Pages Functions（`functions/api/humanize.js`）
- 模型：DeepSeek `deepseek-chat`
- 零依赖、零构建步骤

---

## 🚀 部署到 Cloudflare Pages（GitHub 自动部署）

### 第 1 步：推到 GitHub

```bash
cd de-ai-site
git init
git add .
git commit -m "TuiAI MVP: static site + DeepSeek humanize function"
git branch -M main
git remote add origin git@github.com:<你的用户名>/tuiai.git
git push -u origin main
```

> 仓库可以是 public 或 private，Cloudflare 两种都支持。

### 第 2 步：在 Cloudflare 创建 Pages 项目

1. 登录 https://dash.cloudflare.com → Workers & Pages → Create
2. 选 **Pages** → **Connect to Git**
3. 授权并选择你的 `tuiai` 仓库
4. 构建配置：
   - **Framework preset**: `None`
   - **Build command**: 留空（无需构建）
   - **Build output directory**: `/`（根目录，因为静态文件就在仓库根）
   - **Root directory**: 留空
5. 点 **Save and Deploy**

### 第 3 步：配置 DeepSeek API Key（最关键）

进入项目 → **Settings** → **Environment variables** → **Production**：

| 变量名 | 值 | 说明 |
|---|---|---|
| `DEEPSEEK_API_KEY` | `sk-你的密钥` | 在 https://platform.deepseek.com → API Keys 创建 |

点 **Encrypt** 保存。然后 **Deployments** → 找到最新部署 → **Retry deployment** 让变量生效。

### 第 4 步：验证

部署完成后访问 `https://tuiai.pages.dev`（或自定义域名），在工作台粘贴一段 AI 文本点"去除 AI 味"，应该能拿到 DeepSeek 改写的结果。

健康检查：访问 `https://tuiai.pages.dev/api/humanize`，应返回 `{"ok":true,"service":"tuiai-humanize",...}`。

---

## 🔧 本地开发

### 方式 A：最简单（只跑前端，API 走降级）

```bash
cd de-ai-site
python3 -m http.server 8080
# 访问 http://localhost:8080
```

此时 `/api/humanize` 不存在，前端会自动降级到本地规则版 `humanizeText()`，UI 照常工作。

### 方式 B：完整本地预览（含 DeepSeek）

安装 wrangler：

```bash
npm install -g wrangler
# 或 npx wrangler
```

创建 `.dev.vars` 文件（已被 .gitignore 忽略）：

```
DEEPSEEK_API_KEY=sk-你的密钥
```

启动：

```bash
cd de-ai-site
wrangler pages dev . --compatibility-date=2024-09-01
# 访问 http://localhost:8788
```

---

## 📁 项目结构

```
de-ai-site/
├── index.html              # 前端页面
├── app.js                  # 前端逻辑（i18n / 场景 / 付费墙 / 差异对比）
├── functions/
│   └── api/
│       └── humanize.js     # Cloudflare Pages Function → DeepSeek 代理
├── wrangler.toml           # Cloudflare 配置
├── .gitignore
├── DEPLOYMENT.md           # 完整上线评估清单
└── README.md               # 本文件
```

---

## 🛡️ 已具备 vs 待补齐

### ✅ 已具备（MVP 可用）

- 4 语言界面（zh / en / ja / es）
- 5 大场景（通用 / 邮件 / 会议纪要 / 汇报 / 调研），每个场景独立 system prompt
- 3 档改写强度（轻度 / 标准 / 深度）
- 差异对比视图（字符级 LCS）
- 模拟付费墙 + 多支付方式 UI
- 后端 DeepSeek 代理 + 密钥保护 + 简易限流（需绑 KV）
- API 失败自动降级到规则版，UI 永不崩

### ⚠️ 待补齐（生产化必做，详见 `DEPLOYMENT.md`）

- [ ] 真实支付网关（Stripe / 微信支付）
- [ ] 账号系统（登录 / 订单 / 订阅状态服务端化）
- [ ] 服务端配额强制（当前是 localStorage 软限制，可被绕过）
- [ ] 隐私政策 / 服务条款 / Cookie 横幅
- [ ] 中国大陆 ICP 备案（如需境内访问）
- [ ] 自定义域名 + HTTPS
- [ ] 错误监控（Sentry）+ 业务分析（GA4）

---

## 💡 关于 DeepSeek

- **模型**：`deepseek-chat`（默认，性价比最高）
- **价格**：约 ¥1/百万输入 token，¥2/百万输出 token（缓存命中更便宜）
- **5 万次改写（每次约 800 字）预估成本**：约 ¥150–200/月
- **限速**：默认每 IP 每分钟 10 次（在 `functions/api/humanize.js` 中可调）
- **并发**：DeepSeek 默认 QPS 较宽，Pages Functions 自动弹性扩缩

### 切换模型

如果想换成 DeepSeek-V3 或其他模型，改 `functions/api/humanize.js` 里的 `model` 字段即可：

```js
model: 'deepseek-reasoner',  // R1 推理模型，更慢但更聪明
```

---

## 🆘 常见问题

**Q：部署后点"去除 AI 味"没反应？**
A：打开浏览器控制台看 `/api/humanize` 的返回。常见原因：
- `SERVER_NO_KEY`：忘配 `DEEPSEEK_API_KEY` 环境变量
- `UPSTREAM_ERROR 401`：Key 错了或欠费
- `RATE_LIMITED`：每分钟超过 10 次，等一分钟

**Q：前端会暴露 DeepSeek Key 吗？**
A：不会。Key 只存在 Cloudflare 环境变量里，前端只调 `/api/humanize`，由 Function 代理。

**Q：怎么绑自定义域名？**
A：Cloudflare Pages → Custom domains → Add domain。如果你的域名也在 Cloudflare 托管 DNS，自动配 HTTPS。

**Q：怎么开启 KV 限流？**
A：Dashboard → Workers & Pages → KV → Create namespace，命名 `RATE_LIMIT`。然后项目 Settings → Functions → KV namespace bindings → 绑定 `RATE_LIMIT_KV` 到 `RATE_LIMIT` namespace。取消 `wrangler.toml` 里 `[[kv_namespaces]]` 的注释并填 id。

---

## 📜 License

MIT
