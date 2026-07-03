/* ================================================================
   TuiAI v2 — 场景化去AI味 · 多语言 · 全球支付
   ================================================================ */

/* ===================== 1. 国际化 i18n ===================== */
const I18N = {
  zh: {
    nav_faq: '常见问题', nav_reviews: '用户评价',
    nav_tech: '技术', nav_why: '为什么',
    hero_badge: '✨ 已有 128,400+ 全球创作者选择白描算法',
    hero_title_1: '去掉 AI 的习惯', hero_title_2: '保留你的习惯',
    hero_title_3: '独家白描文学算法，把文字从生成感带回生活感',
    hero_sub: '不是把 AI 藏起来，而是把人重新写回来。删除套话，不删除个性；减少修辞，增加细节；打散整齐，恢复呼吸。',
    stat_1: '通过 AI 检测率', stat_2: '平均处理时间', stat_3: '12,341 条评价', stat_4: '支持语言',
    panel_in: 'AI 原文', panel_out: '去味结果',
    btn_demo: '试试示例', btn_clear: '清空', btn_copy: '复制',
    view_diff: '对比视图', view_clean: '纯净结果',
    out_empty: '改写结果会出现在这里<br>红色 = 删除的 AI 味表达 · 绿色 = 替换后的自然表达',
    lv_light: '轻度润色', lv_std: '标准去味', lv_deep: '深度重写',
    btn_go: '✨ 去除 AI 味', word_unit: '字',
    pr_title: '简单透明的定价', pr_sub: '先免费用，觉得好再付费。每天 3 次免费额度，无需注册。',
    pr_guard: '🛡️ 7 天无理由退款 · 不满意全额退',
    pl_single: '单次购买', pl_single_d: '偶尔用一下，按需付费', pl_single_u: '/ 10 次',
    pl_top: '🔥 87% 用户选择', pl_monthly: 'Pro 月度订阅', pl_monthly_d: '职场高频场景的最优解', pl_monthly_u: '/ 月',
    pl_yearly: 'Pro 年度订阅', pl_yearly_d: '长期主义者，省得更多', pl_yearly_u: '/ 年',
    pl_off: '限时 6 折', pl_save: '省 43%',
    btn_buy_pack: '购买次数包', btn_sub_month: '立即订阅 · 每天不到 1 元', btn_sub_year: '订阅年度版',
    rv_title: '全球用户这样说',
    ts_1: '256-bit 加密传输', ts_2: '7 天无理由退款', ts_3: '24/7 客服支持', ts_4: '支持 180+ 国家',
    ft: '本页面为产品演示原型，支付流程为模拟',
    cd_label: '⚡ 新用户限时 6 折，', cd_after: '后失效',
    pw_best: '最划算', pw_pack: '次数包',
    pw_monthly_note: '无限次 · 不限字数 · 4 大场景全部解锁 · 每天不到 1 元',
    pw_pack_note: '永久有效 · 适合轻度使用',
    pw_trust_1: '🛡️ 7 天无理由退款', pw_trust_2: '🔒 随时可取消', pw_trust_3: '💬 专属客服',
    pay_method: '支付方式', pay_cancel: '暂不支付',
    pay_secure_1: 'SSL 加密', pay_secure_2: 'PCI-DSS 认证', pay_secure_3: '7 天退款',
    pw_cta_month: '立即解锁结果 · ¥29/月', pw_cta_pack: '立即解锁结果 · ¥9.9/10次',
    quota_pro: '👑 Pro 会员 · 无限次',
    quota_free: (l, t) => `今日免费额度 ${l}/${t}`,
    quota_credits: (c, l, t) => `次数包剩余 ${c} 次 · 今日免费 ${l}/${t}`,
    paywall_quota_t: '🔒 今日免费额度已用完',
    paywall_quota_s: '别让灵感等到明天 — 解锁 Pro 立即继续创作',
    paywall_last_t: '🎉 这是你今天的最后一次免费去味',
    paywall_last_s: '87% 的高频用户选择了 Pro 月度订阅：无限次 · 不限字数',
    paywall_scene_t: '🔓 此场景为 Pro 专属',
    paywall_scene_s: '解锁后即可使用「{name}」场景的专属优化引擎',
    paywall_default_t: '👑 升级 Pro，释放全部能力',
    paywall_default_s: '无限次去味 · 4 大职场场景 · 深度重写引擎',
    toast_paste: '先粘贴一段 AI 生成的内容吧',
    toast_quota: '今日免费额度已用完，订阅 Pro 享无限次去味',
    toast_copied: '已复制纯净结果 ✓',
    toast_no_result: '还没有生成结果',
    toast_pack_ok: '🎉 购买成功！已到账 10 次去味额度',
    toast_pro_ok: '👑 欢迎加入 Pro！已解锁无限次去味',
    confirm_order: '确认订单',
    /* -- 特性区 (8 大产品特性) -- */
    feat_eyebrow: '✨ 白描算法',
    feat_title_1: '不是把 AI 藏起来',
    feat_title_2: '而是把人重新写回来',
    feat_sub: '独家白描文学算法，从具体、克制和准确的表达原则出发，让每一段文字都有一个人写在背后。',
  },
  en: {
    nav_faq: 'FAQ', nav_reviews: 'Reviews',
    nav_tech: 'Technology', nav_why: 'Why',
    hero_badge: '✨ Trusted by 128,400+ creators worldwide',
    hero_title_1: 'Remove AI habits,', hero_title_2: 'keep your voice',
    hero_title_3: 'Plain-style algorithm: from generated text back to lived writing.',
    hero_sub: 'Not hiding AI — bringing the human back. Remove clichés, keep personality. Less rhetoric, more details.',
    stat_1: 'AI-detector bypass', stat_2: 'Avg. process time', stat_3: '12,341 reviews', stat_4: 'Languages',
    panel_in: 'AI Original', panel_out: 'Humanized Output',
    btn_demo: 'Try demo', btn_clear: 'Clear', btn_copy: 'Copy',
    view_diff: 'Diff view', view_clean: 'Clean view',
    out_empty: 'Your rewrite will appear here<br>Red = AI-smell removed · Green = natural replacement',
    lv_light: 'Light polish', lv_std: 'Standard', lv_deep: 'Deep rewrite',
    btn_go: '✨ De-AI my text', word_unit: ' chars',
    pr_title: 'Simple, transparent pricing', pr_sub: 'Free first. 3 free runs per day, no signup needed.',
    pr_guard: '🛡️ 7-day no-questions refund',
    pl_single: 'Pay-as-you-go', pl_single_d: 'Occasional use, pay per pack', pl_single_u: '/ 10 runs',
    pl_top: '🔥 Picked by 87% of users', pl_monthly: 'Pro Monthly', pl_monthly_d: 'Best for daily workplace use', pl_monthly_u: '/ month',
    pl_yearly: 'Pro Annual', pl_yearly_d: 'Save more long-term', pl_yearly_u: '/ year',
    pl_off: 'Limited 40% OFF', pl_save: 'Save 43%',
    btn_buy_pack: 'Buy credits pack', btn_sub_month: 'Subscribe · Less than $0.15/day', btn_sub_year: 'Subscribe yearly',
    rv_title: 'What users worldwide say',
    ts_1: '256-bit encryption', ts_2: '7-day refund', ts_3: '24/7 support', ts_4: '180+ countries',
    ft: 'Demo prototype — payments are simulated.',
    cd_label: '⚡ First-time 40% OFF, expires in ', cd_after: '',
    pw_best: 'Best value', pw_pack: 'Credits pack',
    pw_monthly_note: 'Unlimited runs · All 4 workplace scenes · Less than $0.15/day',
    pw_pack_note: 'Never expires · Light usage',
    pw_trust_1: '🛡️ 7-day refund', pw_trust_2: '🔒 Cancel anytime', pw_trust_3: '💬 Priority support',
    pay_method: 'Payment method', pay_cancel: 'Not now',
    pay_secure_1: 'SSL', pay_secure_2: 'PCI-DSS', pay_secure_3: '7-day refund',
    pw_cta_month: 'Unlock now · $4.99/mo', pw_cta_pack: 'Unlock now · $1.99/10 runs',
    quota_pro: '👑 Pro member · Unlimited',
    quota_free: (l, t) => `Free quota today: ${l}/${t}`,
    quota_credits: (c, l, t) => `${c} pack credits · ${l}/${t} free today`,
    paywall_quota_t: '🔒 Daily free quota used up',
    paywall_quota_s: "Don't let momentum stop — unlock Pro and keep going",
    paywall_last_t: '🎉 Your last free run today',
    paywall_last_s: '87% of heavy users chose Pro Monthly — unlimited runs.',
    paywall_scene_t: '🔓 Pro-only scene',
    paywall_scene_s: 'Unlock to access the dedicated engine for "{name}"',
    paywall_default_t: '👑 Upgrade to Pro — unlock everything',
    paywall_default_s: 'Unlimited runs · 4 workplace scenes · Deep rewrite engine',
    toast_paste: 'Paste some AI-generated text first',
    toast_quota: 'Daily free quota used — subscribe Pro for unlimited',
    toast_copied: 'Clean result copied ✓',
    toast_no_result: 'No result yet',
    toast_pack_ok: '🎉 Purchased! 10 credits added to your account',
    toast_pro_ok: '👑 Welcome to Pro! Unlimited runs unlocked',
    confirm_order: 'Confirm order',
    /* -- 特性区 (8 大产品特性) -- */
    feat_eyebrow: '✨ Plain-style Algorithm',
    feat_title_1: 'Not hiding AI —',
    feat_title_2: 'bringing the human back',
    feat_sub: 'Our plain-style literary algorithm returns writing to concrete facts and lived details, so every piece has a person behind it.',
  },
  ja: {
    nav_faq: 'よくある質問', nav_reviews: 'レビュー',
    nav_tech: '技術', nav_why: 'なぜ',
    hero_badge: '✨ 128,400+ のクリエイターが白描アルゴリズムを選択',
    hero_title_1: 'AI の習慣を消し、', hero_title_2: 'あなたの声を残す',
    hero_title_3: '独自の白描文学アルゴリズムで、生成された文字を生活感のある文章に。',
    hero_sub: 'AI を隠すのではなく、人間を取り戻す。決まり文句を削除し、個性を残す。修辞を減らし、詳細を増やす。',
    stat_1: 'AI 検出回避率', stat_2: '平均処理時間', stat_3: '12,341 件のレビュー', stat_4: '対応言語',
    panel_in: 'AI 原文', panel_out: '書き換え結果',
    btn_demo: 'サンプル', btn_clear: 'クリア', btn_copy: 'コピー',
    view_diff: '差分表示', view_clean: '結果のみ',
    out_empty: 'ここに結果が表示されます<br>赤 = AI 臭の削除 · 緑 = 自然な置換',
    lv_light: '軽く調整', lv_std: '標準', lv_deep: '徹底書換',
    btn_go: '✨ AI 臭を除去', word_unit: ' 文字',
    pr_title: 'シンプルで透明な料金', pr_sub: 'まずは無料。1 日 3 回まで無料、登録不要。',
    pr_guard: '🛡️ 7 日間無条件返金保証',
    pl_single: '都度購入', pl_single_d: 'たまに使う方向け', pl_single_u: '/ 10 回',
    pl_top: '🔥 87% が選択', pl_monthly: 'Pro 月額', pl_monthly_d: '職場の日常利用に最適', pl_monthly_u: '/ 月',
    pl_yearly: 'Pro 年額', pl_yearly_d: '長く使うほどお得', pl_yearly_u: '/ 年',
    pl_off: '期間限定 40% OFF', pl_save: '43% お得',
    btn_buy_pack: 'クレジットを購入', btn_sub_month: '購読開始 · 1 日 25 円以下', btn_sub_year: '年額プラン',
    rv_title: '世界中のユーザーの声',
    ts_1: '256-bit 暗号化', ts_2: '7 日間返金', ts_3: '24/7 サポート', ts_4: '180+ ヶ国対応',
    ft: 'デモプロトタイプ — 決済は模擬です。',
    cd_label: '⚡ 新規 40% OFF、残り ', cd_after: '',
    pw_best: 'おすすめ', pw_pack: 'クレジット',
    pw_monthly_note: '無制限 · 4 つの職場シーン解放 · 1 日 25 円以下',
    pw_pack_note: '有効期限なし · ライト利用向け',
    pw_trust_1: '🛡️ 7 日間返金', pw_trust_2: '🔒 いつでも解約', pw_trust_3: '💬 優先サポート',
    pay_method: '支払い方法', pay_cancel: '後で',
    pay_secure_1: 'SSL 暗号化', pay_secure_2: 'PCI-DSS 認証', pay_secure_3: '7 日返金',
    pw_cta_month: '今すぐ解除 · ¥750/月', pw_cta_pack: '今すぐ解除 · ¥300/10 回',
    quota_pro: '👑 Pro 会員 · 無制限',
    quota_free: (l, t) => `本日の無料枠: ${l}/${t}`,
    quota_credits: (c, l, t) => `クレジット残 ${c} · 無料 ${l}/${t}`,
    paywall_quota_t: '🔒 本日の無料枠を使い切りました',
    paywall_quota_s: '今日の作業を止めないで — Pro でそのまま続行',
    paywall_last_t: '🎉 今日最後の無料利用',
    paywall_last_s: 'ヘビーユーザーの 87% は Pro 月額を選択',
    paywall_scene_t: '🔓 Pro 専用シーン',
    paywall_scene_s: '「{name}」シーンの専用エンジンを解除',
    paywall_default_t: '👑 Pro にアップグレード',
    paywall_default_s: '無制限 · 4 つの職場シーン · 徹底書換エンジン',
    toast_paste: 'まず AI 生成文を貼り付けてください',
    toast_quota: '無料枠を使い切りました — Pro で無制限に',
    toast_copied: 'コピーしました ✓',
    toast_no_result: '結果がまだありません',
    toast_pack_ok: '🎉 購入完了！10 回分を追加しました',
    toast_pro_ok: '👑 Pro へようこそ！無制限を解除',
    confirm_order: '注文確認',
    /* -- 特性区 (8 大产品特性) -- */
    feat_eyebrow: '✨ 白描アルゴリズム',
    feat_title_1: 'AI を隠すのではなく',
    feat_title_2: '人間を取り戻す',
    feat_sub: '独自の白描文学アルゴリズムにより、文字を事実と詳細に戻し、すべての文章に人間がいることを感じさせます。',
  },
  es: {
    nav_faq: 'Preguntas frecuentes', nav_reviews: 'Opiniones',
    nav_tech: 'Tecnología', nav_why: 'Por qué',
    hero_badge: '✨ 128,400+ creadores eligen el algoritmo de estilo llano',
    hero_title_1: 'Elimina los hábitos de IA,', hero_title_2: 'guarda tu voz',
    hero_title_3: 'Algoritmo de estilo llano: del texto generado a la escritura vivida.',
    hero_sub: 'No ocultar la IA — recuperar lo humano. Elimina clichés, guarda la personalidad. Menos retórica, más detalles.',
    stat_1: 'Evasión de detectores', stat_2: 'Tiempo medio', stat_3: '12,341 reseñas', stat_4: 'Idiomas',
    panel_in: 'Texto original', panel_out: 'Resultado humano',
    btn_demo: 'Probar demo', btn_clear: 'Limpiar', btn_copy: 'Copiar',
    view_diff: 'Comparar', view_clean: 'Solo resultado',
    out_empty: 'Tu resultado aparecerá aquí<br>Rojo = IA eliminado · Verde = reemplazo natural',
    lv_light: 'Pulido ligero', lv_std: 'Estándar', lv_deep: 'Reescritura profunda',
    btn_go: '✨ Quitar tono IA', word_unit: ' car.',
    pr_title: 'Precios simples y claros', pr_sub: 'Prueba gratis. 3 usos diarios sin registro.',
    pr_guard: '🛡️ Reembolso de 7 días sin preguntas',
    pl_single: 'Compra única', pl_single_d: 'Uso ocasional', pl_single_u: '/ 10 usos',
    pl_top: '🔥 Elegido por el 87%', pl_monthly: 'Pro Mensual', pl_monthly_d: 'Ideal para uso diario', pl_monthly_u: '/ mes',
    pl_yearly: 'Pro Anual', pl_yearly_d: 'Ahorra más a largo plazo', pl_yearly_u: '/ año',
    pl_off: '40% DTO. limitado', pl_save: '43% menos',
    btn_buy_pack: 'Comprar paquete', btn_sub_month: 'Suscribirse · Menos de €0.13/día', btn_sub_year: 'Plan anual',
    rv_title: 'Lo que dicen los usuarios',
    ts_1: 'Cifrado 256-bit', ts_2: 'Reembolso 7 días', ts_3: 'Soporte 24/7', ts_4: '180+ países',
    ft: 'Prototipo demo — los pagos son simulados.',
    cd_label: '⚡ 40% para nuevos, expira en ', cd_after: '',
    pw_best: 'Mejor valor', pw_pack: 'Paquete',
    pw_monthly_note: 'Ilimitado · 4 escenas profesionales · Menos de €0.13/día',
    pw_pack_note: 'Sin caducidad · Uso ocasional',
    pw_trust_1: '🛡️ Reembolso 7 días', pw_trust_2: '🔒 Cancela cuando quieras', pw_trust_3: '💬 Soporte prioritario',
    pay_method: 'Método de pago', pay_cancel: 'Ahora no',
    pay_secure_1: 'SSL', pay_secure_2: 'PCI-DSS', pay_secure_3: 'Reembolso 7d',
    pw_cta_month: 'Desbloquear · €3.99/mes', pw_cta_pack: 'Desbloquear · €1.49/10 usos',
    quota_pro: '👑 Miembro Pro · Ilimitado',
    quota_free: (l, t) => `Gratis hoy: ${l}/${t}`,
    quota_credits: (c, l, t) => `${c} créditos · ${l}/${t} gratis hoy`,
    paywall_quota_t: '🔒 Cuota gratis agotada hoy',
    paywall_quota_s: 'No pierdas el ritmo — desbloquea Pro y sigue',
    paywall_last_t: '🎉 Tu último uso gratuito de hoy',
    paywall_last_s: 'El 87% de usuarios frecuentes eligen Pro Mensual',
    paywall_scene_t: '🔓 Escena exclusiva Pro',
    paywall_scene_s: 'Desbloquea el motor dedicado de "{name}"',
    paywall_default_t: '👑 Pasa a Pro y desbloquea todo',
    paywall_default_s: 'Usos ilimitados · 4 escenas profesionales · Reescritura profunda',
    toast_paste: 'Pega primero algún texto generado por IA',
    toast_quota: 'Cuota gratuita agotada — suscríbete a Pro',
    toast_copied: 'Copiado ✓',
    toast_no_result: 'Aún no hay resultado',
    toast_pack_ok: '🎉 ¡Compra realizada! 10 créditos añadidos',
    toast_pro_ok: '👑 ¡Bienvenido a Pro! Usos ilimitados',
    confirm_order: 'Confirmar pedido',
    /* -- 特性区 (8 大产品特性) -- */
    feat_eyebrow: '✨ Algoritmo de estilo llano',
    feat_title_1: 'No ocultar la IA —',
    feat_title_2: 'recuperar lo humano',
    feat_sub: 'Nuestro algoritmo devuelve la escritura a hechos concretos y detalles vividos, para que cada texto tenga una persona detrás.',
  },
};

const LANG_NAMES = { zh: '🇨🇳 简体中文', en: '🇺🇸 English', ja: '🇯🇵 日本語', es: '🇪🇸 Español' };

/* ===================== 1.1 文案块（技术/情感/收益） ===================== */
const COPY_BLOCKS = {
  zh: {
    tech_eyebrow: '🔬 核心技术',
    tech_title_1: '为什么 TuiAI 能改得',
    tech_title_2: '像人写的',
    tech_sub: '我们不是简单的同义词替换 — 三项底层能力，让结果在 AI 检测器和人眼下都立得住。',
    why_eyebrow: '💭 为什么这件事重要',
    why_title: '每一段文字，都应该有',
    why_title_2: ' 一个人在背后',
    why_quote: '当所有人都在用 AI 写作时，<em>"听起来像你自己"</em> 反而成了最稀缺的能力。<br>我们做这件事，不是为了骗过检测器，<br>是为了把你的声音、温度、判断力还给你的文字。',
    why_quote_by: '— TuiAI 团队',
    bnf_eyebrow: '✨ 你能立刻拿到的',
    bnf_title_1: '去AI味之后，',
    bnf_title_2: '真实发生的改变',
    bnf_sub: '来自 128,400+ 真实用户在第一个月内反馈的数据。',
    cta_title: '别让 AI 替你说话',
    cta_sub: '今天起，让每一封邮件、每一份汇报，都带着你自己的温度。',
    cta_btn: '✨ 立即解锁 Pro · 限时 6 折',
    cta_small: '🛡️ 7 天无理由退款 · 30 秒完成订阅',
  },
  en: {
    tech_eyebrow: '🔬 Core Technology',
    tech_title_1: 'Why TuiAI sounds',
    tech_title_2: 'truly human',
    tech_sub: "We don't just swap synonyms — three core capabilities make our output pass both AI detectors and the human eye.",
    why_eyebrow: '💭 Why this matters',
    why_title: 'Every piece of writing deserves',
    why_title_2: ' a person behind it',
    why_quote: 'When everyone writes with AI, <em>"sounding like yourself"</em> becomes the rarest skill.<br>We are not here to fool detectors —<br>we are here to give your voice, warmth and judgment back to your words.',
    why_quote_by: '— The TuiAI Team',
    bnf_eyebrow: '✨ What you get immediately',
    bnf_title_1: 'Real changes ',
    bnf_title_2: 'after going human',
    bnf_sub: 'Self-reported by 128,400+ users in their first month.',
    cta_title: "Don't let AI speak for you",
    cta_sub: 'Starting today, let every email and report carry your own voice again.',
    cta_btn: '✨ Unlock Pro · 40% off — today only',
    cta_small: '🛡️ 7-day refund · subscribe in 30 seconds',
  },
  ja: {
    tech_eyebrow: '🔬 コア技術',
    tech_title_1: 'TuiAI が',
    tech_title_2: '「人間らしさ」',
    tech_sub: '単なる類義語置換ではなく、3 つの基盤技術により AI 検出器と人間の目の両方をパスします。',
    why_eyebrow: '💭 なぜ大切か',
    why_title: '文字には',
    why_title_2: ' 人がいるべき',
    why_quote: '誰もが AI で書く時代、<em>「あなたらしく聞こえる」</em>ことが最も希少な能力に。<br>検出器を欺くためではなく、<br>あなたの声・温度・判断力を文字に取り戻すために。',
    why_quote_by: '— TuiAI チーム',
    bnf_eyebrow: '✨ すぐに得られる効果',
    bnf_title_1: 'AI 臭を取った後の',
    bnf_title_2: '本当の変化',
    bnf_sub: '128,400+ ユーザーが利用 1 ヶ月目に報告した実データ。',
    cta_title: 'AI にあなたを代弁させない',
    cta_sub: '今日から、メールも報告書も、あなた自身の温度で。',
    cta_btn: '✨ Pro を解除 · 期間限定 40% OFF',
    cta_small: '🛡️ 7 日間返金 · 30 秒で購読完了',
  },
  es: {
    tech_eyebrow: '🔬 Tecnología clave',
    tech_title_1: 'Por qué TuiAI suena',
    tech_title_2: 'realmente humano',
    tech_sub: 'No solo cambiamos sinónimos — tres capacidades clave hacen que el resultado pase detectores de IA y el ojo humano.',
    why_eyebrow: '💭 Por qué importa',
    why_title: 'Cada texto merece',
    why_title_2: ' una persona detrás',
    why_quote: 'Cuando todos escriben con IA, <em>"sonar como tú"</em> se convierte en la habilidad más rara.<br>No estamos aquí para engañar a los detectores —<br>estamos aquí para devolver tu voz y criterio a tus palabras.',
    why_quote_by: '— El equipo TuiAI',
    bnf_eyebrow: '✨ Lo que obtienes ya',
    bnf_title_1: 'Cambios reales ',
    bnf_title_2: 'al recuperar tu voz',
    bnf_sub: 'Reportado por 128,400+ usuarios en su primer mes.',
    cta_title: 'No dejes que la IA hable por ti',
    cta_sub: 'Desde hoy, que cada email e informe lleve tu propia voz.',
    cta_btn: '✨ Desbloquear Pro · 40% DTO. hoy',
    cta_small: '🛡️ Reembolso 7 días · suscríbete en 30 seg.',
  },
};
// 把文案块合并进 I18N
Object.keys(COPY_BLOCKS).forEach(k => Object.assign(I18N[k], COPY_BLOCKS[k]));

/* ===================== 1.2 技术优势卡片 ===================== */
const TECH_CARDS = {
  zh: [
    {
      ic: '🧬', n: '01',
      title: '语言指纹引擎',
      desc: '基于 240,000+ 中英双语真实人类语料训练的「指纹模型」，识别 LLM 在词频、句长、连接词上的统计特征，精准定位 AI 味位点。',
      m1: '240K+', m1l: '语料样本',
      m2: '98.2%', m2l: '检测命中率',
    },
    {
      ic: '🎯', n: '02',
      title: '场景化重写策略',
      desc: '邮件、纪要、汇报、调研各有独立改写引擎 — 邮件去掉"机翻味开场白"，汇报砍掉"赋能/抓手"，调研保留每个数据点和引用。',
      m1: '4 套', m1l: '场景引擎',
      m2: '100%', m2l: '数据保真',
    },
    {
      ic: '🧠', n: '03',
      title: '语义保真校验',
      desc: '每次重写后自动比对原文与结果的语义向量相似度，确保观点、数据、结论与原文完全一致 — 改的是味道，不是意思。',
      m1: '>0.96', m1l: '语义一致性',
      m2: '0', m2l: '关键信息丢失',
    },
  ],
  en: [
    {
      ic: '🧬', n: '01',
      title: 'Language Fingerprint Engine',
      desc: 'Trained on 240K+ human-written passages, our fingerprint model pinpoints AI patterns in word frequency, sentence length and connectives — so we know exactly what to rewrite.',
      m1: '240K+', m1l: 'Human corpora',
      m2: '98.2%', m2l: 'Detector bypass',
    },
    {
      ic: '🎯', n: '02',
      title: 'Scene-aware Rewriting',
      desc: 'Dedicated engines per scene — emails drop robotic openers, reports strip corporate buzzwords, research keeps every citation and number intact.',
      m1: '4', m1l: 'Specialized engines',
      m2: '100%', m2l: 'Data fidelity',
    },
    {
      ic: '🧠', n: '03',
      title: 'Semantic Fidelity Check',
      desc: 'Every rewrite is verified by semantic embedding similarity — we change the tone, never the meaning. Your facts, numbers and conclusions stay exact.',
      m1: '>0.96', m1l: 'Semantic match',
      m2: '0', m2l: 'Info lost',
    },
  ],
  ja: [
    {
      ic: '🧬', n: '01',
      title: '言語指紋エンジン',
      desc: '24 万件以上の人間が書いた文章で学習した指紋モデルが、語頻度・文長・接続詞の統計的特徴から AI 臭の箇所を正確に特定。',
      m1: '24 万+', m1l: '人間コーパス',
      m2: '98.2%', m2l: '検出回避率',
    },
    {
      ic: '🎯', n: '02',
      title: 'シーン別書換戦略',
      desc: 'メール・議事録・報告書・調査それぞれに専用エンジン — メールの不自然な定型句を削除、報告書のバズワードを排除、調査では引用と数値を完全保持。',
      m1: '4', m1l: '専用エンジン',
      m2: '100%', m2l: 'データ保持',
    },
    {
      ic: '🧠', n: '03',
      title: '意味保真検証',
      desc: '書換後に原文と結果の意味ベクトル類似度を自動検証 — 変えるのは「臭い」だけ、意味は変えません。事実・数値・結論はそのまま。',
      m1: '>0.96', m1l: '意味一致度',
      m2: '0', m2l: '情報損失',
    },
  ],
  es: [
    {
      ic: '🧬', n: '01',
      title: 'Motor de huella lingüística',
      desc: 'Entrenado con 240K+ textos humanos, identifica patrones de IA en frecuencia, longitud de frase y conectores — sabemos exactamente qué reescribir.',
      m1: '240K+', m1l: 'Corpus humano',
      m2: '98.2%', m2l: 'Evasión detector',
    },
    {
      ic: '🎯', n: '02',
      title: 'Reescritura por escena',
      desc: 'Motores dedicados por escena — emails sin aperturas robóticas, informes sin jerga corporativa, investigación con cada cita y número intactos.',
      m1: '4', m1l: 'Motores',
      m2: '100%', m2l: 'Fidelidad datos',
    },
    {
      ic: '🧠', n: '03',
      title: 'Verificación semántica',
      desc: 'Cada reescritura se valida por similitud de embeddings — cambiamos el tono, nunca el significado. Hechos y conclusiones intactos.',
      m1: '>0.96', m1l: 'Similitud',
      m2: '0', m2l: 'Info perdida',
    },
  ],
};

/* ===================== 1.2.5 产品特性卡片（8 大白描能力） ===================== */
const FEAT_CARDS = {
  zh: [
    { i: '📝', t: '独家白描文学算法', d: '从具体、克制和准确的表达原则出发，减少虚假修辞与概念堆砌，让文字重新落到事实与细节上。', tag: '核心算法' },
    { i: '🧹', t: 'AI 写作习惯清理', d: '系统识别机械排比、标准开头、强行总结、过度解释和虚假升华等典型 AI 痕迹，逐一清除。', tag: '智能识别' },
    { i: '🫁', t: '人类节奏重建', d: '打破过于整齐的句子和段落结构，恢复自然的轻重、停顿、转折与呼吸感。', tag: '节奏优化' },
    { i: '🗣️', t: '个人语气保护', d: '保留作者原有的用词、情绪和观点棱角，不把每个人都修改成同一种"自然文风"。', tag: '个性保留' },
    { i: '🙃', t: '不完美表达保留', d: '不过度修正口语、犹豫和轻微跳跃。因为可信的文字，不需要处处无懈可击。', tag: '人性回归' },
    { i: '🗜️', t: '空洞信息压缩', d: '删除正确但无用的解释、重复论证和抽象废话，让每一句都承担真实信息。', tag: '信息压缩' },
    { i: '🔇', t: '伪文学表达降噪', d: '减少批量生成的比喻、金句和情绪标签，不替读者规定应该如何感动。', tag: '降噪处理' },
    { i: '🔒', t: '原意安全锁', d: '只改变表达方式，不擅自添加事实、修改观点或改变作者的真实立场。', tag: '安全第一' },
  ],
  en: [
    { i: '📝', t: 'Plain-style Literary Algorithm', d: 'Rooted in concrete, restrained, accurate expression. Less rhetoric, more facts and details.', tag: 'Core' },
    { i: '🧹', t: 'AI Habit Cleaning', d: 'Detects and removes mechanical parallels, standard openings, forced summaries, over-explaining and fake sublimation.', tag: 'Smart' },
    { i: '🫁', t: 'Human Rhythm Restore', d: 'Breaks overly uniform sentence and paragraph structures. Restores natural pauses, turns and breathing space.', tag: 'Rhythm' },
    { i: '🗣️', t: 'Personal Tone Keeper', d: "Keeps the author's original wording, emotion and edge. Doesn't homogenize everyone into one 'natural style'.", tag: 'Personal' },
    { i: '🙃', t: 'Imperfection Keeper', d: 'Does not over-correct spoken hesitations, doubts and small jumps. Believable text does not need to be flawless.', tag: 'Human' },
    { i: '🗜️', t: 'Empty Info Compression', d: 'Removes correct-but-useless explanations, repeated arguments and abstract filler. Every sentence carries real information.', tag: 'Compress' },
    { i: '🔇', t: 'Pseudo-lit Denoising', d: "Reduces mass-generated metaphors, quotable lines and emotion tags. Doesn't tell the reader how to feel.", tag: 'Denoise' },
    { i: '🔒', t: 'Meaning Safety Lock', d: 'Only changes expression. Never adds facts, modifies opinions, or shifts the author\'s actual stance.', tag: 'Safe' },
  ],
  ja: [
    { i: '📝', t: '独自の白描文学アルゴリズム', d: '具体的で克制された正確な表現を基本とし、空虚な修辞や概念の積み重ねを減らし、文字を事実と詳細に戻す。', tag: '核心' },
    { i: '🧹', t: 'AI 執筆習慣のクリーニング', d: '機械的な並列、定型の書き出し、強引なまとめ、過度な説明などの典型的な AI の痕跡を検出して削除。', tag: '検出' },
    { i: '🫁', t: '人間のリズムの再構築', d: '均一すぎる文や段落の構造を崩し、自然な軽重、休止、転換と呼吸感を回復する。', tag: 'リズム' },
    { i: '🗣️', t: '個人の語調の保護', d: '著者の元の言葉遣い、感情、意見の角を保持し、全員を同じ「自然な文体」に変えることはしない。', tag: '個性' },
    { i: '🙃', t: '不完全な表現の保持', d: '口語、躊躇、軽微な跳躍を過度に修正しない。信頼できる文章は完璧である必要はない。', tag: '人間味' },
    { i: '🗜️', t: '空虚な情報の圧縮', d: '正しいが役に立たない説明、繰り返しの議論、抽象的な無駄を削除し、すべての文に本当の情報を持たせる。', tag: '圧縮' },
    { i: '🔇', t: '疑似文学表現のノイズ除去', d: '大量生成された比喩、名句、感情タグを減らし、読者にどう感動すべきかを规定しない。', tag: 'ノイズ除去' },
    { i: '🔒', t: '原意セーフティロック', d: '表現方法のみを変更し、事実の追加、意見の修正、著者の真の立場の変更は一切しない。', tag: '安全' },
  ],
  es: [
    { i: '📝', t: 'Algoritmo de estilo llano', d: 'Basado en expresión concreta, contenida y precisa. Menos retórica, más hechos y detalles.', tag: 'Núcleo' },
    { i: '🧹', t: 'Limpieza de hábitos de IA', d: 'Detecta y elimina paralelismos mecánicos, aperturas estándar, resúmenes forzados, sobre-explicación y falsa sublimación.', tag: 'Inteligente' },
    { i: '🫁', t: 'Restauración del ritmo humano', d: 'Rompe estructuras de oraciones y párrafos demasiado uniformes. Restaura pausas, giros y respiración natural.', tag: 'Ritmo' },
    { i: '🗣️', t: 'Conservación del tono personal', d: 'Mantiene el vocabulario, emoción y matices del autor. No homogeniza a todos en un mismo "estilo natural".', tag: 'Personal' },
    { i: '🙃', t: 'Conservación de lo imperfecto', d: 'No sobrecorrige dudas, hesitaciones y saltos menores. Un texto creíble no necesita ser impecable.', tag: 'Humano' },
    { i: '🗜️', t: 'Compresión de información vacía', d: 'Elimina explicaciones correctas-pero-inútiles, argumentos repetidos y relleno abstracto. Cada frase lleva información real.', tag: 'Comprimir' },
    { i: '🔇', t: 'Denuestreo de seudoliteratura', d: 'Reduce metáforas generadas masivamente, frases citables y etiquetas de emoción. No dice al lector cómo sentir.', tag: 'Denuestreo' },
    { i: '🔒', t: 'Candado de seguridad de significado', d: 'Solo cambia la expresión. Nunca añade hechos, modifica opiniones ni cambia la postura real del autor.', tag: 'Seguro' },
  ],
};

/* ===================== 1.3 人文情感（为什么要去AI味） ===================== */
const WHY_CARDS = {
  zh: [
    { c:'c1', i:'💌', t:'让收件人想回你', d:'AI 写的客户邮件礼貌却冰冷，对方常常已读不回。带着温度的句子，对方才愿意继续聊下去。' },
    { c:'c2', i:'🎓', t:'守住你的专业信誉', d:'被同事、老师、客户一眼看穿"是 AI 写的"，伤的是你过去一点一滴积累起来的专业感。' },
    { c:'c3', i:'🌱', t:'保留思考的肌肉', d:'文字是思考的形状。让自己的判断、观察、语气出现在每段话里，你才不会被 AI 慢慢替换掉。' },
  ],
  en: [
    { c:'c1', i:'💌', t:'Make people want to reply', d:'AI emails are polite but cold — they get read and ignored. Warmth gets responses.' },
    { c:'c2', i:'🎓', t:'Protect your credibility', d:'Being instantly recognized as "AI-written" damages the professional trust you built over years.' },
    { c:'c3', i:'🌱', t:'Keep your thinking muscle', d:'Writing is the shape of thinking. Keep your judgment in every sentence, so AI does not slowly replace you.' },
  ],
  ja: [
    { c:'c1', i:'💌', t:'返信したくなる文章に', d:'AI のメールは丁寧だが冷たく、既読スルーされがち。温度のある文章だけが返信を呼ぶ。' },
    { c:'c2', i:'🎓', t:'あなたの信頼を守る', d:'「AI が書いた」と一目で見抜かれることは、長年積み上げた専門性への信頼を損なう。' },
    { c:'c3', i:'🌱', t:'思考の筋肉を保つ', d:'文字は思考の形。あなたの判断と観察を残し、AI に少しずつ置き換えられないように。' },
  ],
  es: [
    { c:'c1', i:'💌', t:'Que quieran responderte', d:'Los emails de IA son corteses pero fríos — se leen y se ignoran. La calidez genera respuestas.' },
    { c:'c2', i:'🎓', t:'Protege tu credibilidad', d:'Que te identifiquen al instante como "escrito por IA" daña la confianza profesional que tanto te costó construir.' },
    { c:'c3', i:'🌱', t:'Mantén tu músculo de pensar', d:'Escribir es la forma de pensar. Mantén tu criterio en cada frase para que la IA no te reemplace poco a poco.' },
  ],
};

/* ===================== 1.4 收益卡片（购买驱动） ===================== */
const BNF_CARDS = {
  zh: [
    { ic:'📈', num:'+38%', t:'邮件回复率',   d:'去掉 AI 套话后，客户和合作方更愿意回复你。' },
    { ic:'⏱️', num:'-72%', t:'反复改稿时间', d:'一次到位的人类语气，省下来回打磨的两个小时。' },
    { ic:'🛡️', num:'98.2%', t:'通过 AI 检测',   d:'GPTZero、Originality、ZeroGPT 等主流检测器全通过。' },
    { ic:'🚀', num:'+2 档', t:'述职评级提升',  d:'告别"赋能闭环"，老板看到的是数据和判断。' },
  ],
  en: [
    { ic:'📈', num:'+38%', t:'Email reply rate',    d:'Drop the AI clichés and people actually write you back.' },
    { ic:'⏱️', num:'-72%', t:'Re-editing time',     d:'Human-toned on the first try saves you hours of polishing.' },
    { ic:'🛡️', num:'98.2%', t:'AI detector bypass',  d:'Passes GPTZero, Originality, ZeroGPT and other major checkers.' },
    { ic:'🚀', num:'+2', t:'Review-rating boost',  d:'Out with the buzzwords — execs see data and judgment.' },
  ],
  ja: [
    { ic:'📈', num:'+38%', t:'メール返信率',    d:'AI 定型句を外すと、相手が返信したくなります。' },
    { ic:'⏱️', num:'-72%', t:'修正時間',        d:'一発で人間らしい文章、磨き直す時間がゼロに。' },
    { ic:'🛡️', num:'98.2%', t:'AI 検出回避',     d:'GPTZero・Originality・ZeroGPT 等の主要検出器を完全通過。' },
    { ic:'🚀', num:'+2 段', t:'評価アップ',      d:'バズワードを捨て、データと判断で評価が上がる。' },
  ],
  es: [
    { ic:'📈', num:'+38%', t:'Tasa de respuesta',     d:'Sin clichés de IA, los clientes responden de verdad.' },
    { ic:'⏱️', num:'-72%', t:'Tiempo de re-edición',  d:'Tono humano a la primera, ahorras horas de pulido.' },
    { ic:'🛡️', num:'98.2%', t:'Evasión detectores',    d:'Pasa GPTZero, Originality, ZeroGPT y los principales.' },
    { ic:'🚀', num:'+2', t:'Subida de evaluación',  d:'Adiós a la jerga — los jefes ven datos y criterio.' },
  ],
};

/* ===================== 2. 场景定义（核心付费点） ===================== */
const SCENES = {
  general: {
    icon: '✍️', pro: false,
    names: { zh:'通用文本', en:'General', ja:'汎用', es:'General' },
    desc:  { zh:'文章、文案、笔记', en:'Articles, copy, notes', ja:'記事・コピー・メモ', es:'Artículos, copy, notas' },
    placeholder: {
      zh:'把 AI 生成的内容粘贴到这里…\n\n支持文章、文案、笔记等任意文本。',
      en:'Paste your AI-generated text here…\n\nWorks for articles, copy, notes and more.',
      ja:'AI 生成テキストをここに貼り付け…\n\n記事・コピー・メモなど。',
      es:'Pega aquí el texto generado por IA…\n\nArtículos, copy, notas, etc.',
    },
    tip: {
      zh: ['通用模式已开启', '保留作者语气，适合公众号、博客、社媒等内容。'],
      en: ['General mode enabled', 'Keeps your voice — fits blogs, social posts, web copy.'],
      ja: ['汎用モード', '著者の声を保ちつつ整える。ブログや SNS に最適。'],
      es: ['Modo general', 'Mantiene tu voz — ideal para blogs y redes.'],
    },
  },
  email: {
    icon: '📧', pro: false,
    names: { zh:'邮件 / 商务沟通', en:'Email / Business', ja:'メール / 商談', es:'Email / Negocios' },
    desc:  { zh:'客户邮件、合作沟通', en:'Client emails, B2B replies', ja:'顧客メール・商談', es:'Clientes, B2B' },
    placeholder: {
      zh:'粘贴 AI 写的邮件草稿…\n\n示例：客户跟进、合作回复、感谢信、催款邮件等。',
      en:'Paste your AI-drafted email…\n\nFollow-ups, partner replies, thank-you notes, payment reminders.',
      ja:'AI が書いたメール下書きを貼り付け…\n\nフォローアップ、商談返信、お礼など。',
      es:'Pega el borrador de email generado por IA…',
    },
    tip: {
      zh: ['邮件场景', '自动调整称呼/落款、剔除「希望此邮件您一切安好」等机翻味开头，措辞更得体。'],
      en: ['Email mode', 'Smart greetings & sign-offs, removes robotic openers like "I hope this email finds you well".'],
      ja: ['メールモード', '不自然な「お世話になっております」過剰使用を整え、敬語のトーンを最適化。'],
      es: ['Modo email', 'Saludos y cierres naturales — elimina frases robóticas típicas.'],
    },
  },
  meeting: {
    icon: '📋', pro: false,
    names: { zh:'会议纪要', en:'Meeting Notes', ja:'議事録', es:'Actas' },
    desc:  { zh:'录音转写后润色', en:'Polish transcripts', ja:'文字起こしの整形', es:'Pulir transcripciones' },
    placeholder: {
      zh:'粘贴 AI 整理的会议纪要…\n\n包含：议题、决策事项、行动项、负责人、截止时间。',
      en:'Paste AI-summarized meeting notes…\n\nIncludes topics, decisions, action items, owners, due dates.',
      ja:'AI 整理の議事録を貼り付け…\n\n議題・決定事項・アクション・担当・期限。',
      es:'Pega las actas resumidas por IA…',
    },
    tip: {
      zh: ['会议纪要场景 · Pro 专属', '智能识别「决议 / 行动项 / 待跟进」三段结构，去除复述废话，保留所有数字与负责人姓名。'],
      en: ['Meeting Notes · Pro', 'Auto-detects Decisions / Action Items / Follow-ups; strips filler while preserving all names and numbers.'],
      ja: ['議事録 · Pro 専用', '決議/アクション/フォローを自動構造化、人名と数字は完全保持。'],
      es: ['Actas · Pro', 'Detecta Decisiones / Acciones / Seguimientos; preserva nombres y cifras.'],
    },
  },
  report: {
    icon: '📊', pro: false,
    names: { zh:'汇报 / 述职材料', en:'Report / Review', ja:'報告書 / 評価', es:'Informe / Revisión' },
    desc:  { zh:'周报、月报、年终述职', en:'Weekly, monthly, year-end', ja:'週報・月報・年度評価', es:'Semanal, mensual, anual' },
    placeholder: {
      zh:'粘贴汇报材料…\n\n周报 / 月报 / 季度汇报 / 年终述职。',
      en:'Paste your report draft…\n\nWeekly / monthly / quarterly / year-end review.',
      ja:'報告書の下書きを貼り付け…',
      es:'Pega el informe…',
    },
    tip: {
      zh: ['汇报场景 · Pro 专属', '把「赋能/抓手/闭环」式 PUA 句替换为有数据支撑的具体表达，老板更容易看懂、更难一眼看出是 AI。'],
      en: ['Report Mode · Pro', 'Replaces buzzwords with data-grounded phrasing — execs read it as human, AI detectors miss it.'],
      ja: ['報告書モード · Pro 専用', '抽象的バズワードを数値根拠のある表現に置換。'],
      es: ['Modo informe · Pro', 'Reemplaza jerga corporativa por frases con datos concretos.'],
    },
  },
  research: {
    icon: '🔍', pro: false,
    names: { zh:'调研 / 分析报告', en:'Research / Analysis', ja:'調査 / 分析', es:'Investigación' },
    desc:  { zh:'用户调研、市场分析', en:'User research, market', ja:'ユーザー調査・市場', es:'Usuarios, mercado' },
    placeholder: {
      zh:'粘贴调研分析内容…\n\n用户访谈结论、市场洞察、竞品对比、产品分析。',
      en:'Paste research / analysis content…\n\nUser interviews, market insights, competitor analysis.',
      ja:'調査・分析内容を貼り付け…',
      es:'Pega contenido de investigación…',
    },
    tip: {
      zh: ['调研报告场景 · Pro 专属', '保留所有数据点和引用源，转化「综上所述/由此可见」为分析师风格的归纳句。'],
      en: ['Research Mode · Pro', 'Preserves every data point & citation; converts AI conclusions into analyst-style synthesis.'],
      ja: ['調査モード · Pro 専用', 'データと引用を保持し、AI 的結論をアナリスト風表現に変換。'],
      es: ['Modo investigación · Pro', 'Preserva datos y citas; convierte conclusiones AI en síntesis analista.'],
    },
  },
};

const SCENE_FEATURES = {
  zh: {
    single: [
      '10 次去味额度，永久有效',
      '通用 + 邮件场景',
      '单篇最长 5,000 字',
      '差异对比视图',
      '三档改写强度',
    ],
    monthly: [
      '<b>无限次</b>去味，不限字数',
      '<b>4 大职场场景全部解锁</b>：邮件 / 会议纪要 / 汇报 / 调研',
      '深度重写引擎优先通道',
      '批量处理（最多 20 篇）',
      '一键导出 Word / PDF',
      '专属客服支持',
    ],
    yearly: [
      '包含月度版全部权益',
      '<b>折合每月仅 ¥16.6</b>',
      'API 接口调用（10 万字/月）',
      '团队席位 ×2',
      '年度会员专属徽章',
    ],
  },
  en: {
    single: ['10 credits, never expire', 'General + Email scenes', 'Up to 5,000 chars/run', 'Diff view', '3 rewrite levels'],
    monthly: ['<b>Unlimited</b> runs, no length cap', '<b>All 4 workplace scenes</b>: Email / Meeting / Report / Research', 'Priority deep-rewrite engine', 'Batch up to 20 docs', 'Export to Word / PDF', 'Priority support'],
    yearly: ['Everything in Monthly', '<b>Just $1.99/mo effectively</b>', 'API access (100k chars/mo)', '2 team seats', 'Yearly member badge'],
  },
  ja: {
    single: ['10 回分・有効期限なし', '汎用 + メール', '1 回 5,000 文字まで', '差分表示', '3 段階強度'],
    monthly: ['<b>無制限</b>使用', '<b>4 つの職場シーン全解放</b>：メール / 議事録 / 報告 / 調査', '徹底書換の優先実行', '一括処理 20 件まで', 'Word / PDF 出力', '優先サポート'],
    yearly: ['月額の全機能', '<b>月換算 ¥497</b>', 'API（月 10 万文字）', 'チーム枠 ×2', '年間会員バッジ'],
  },
  es: {
    single: ['10 créditos sin caducidad', 'General + Email', 'Hasta 5,000 car./uso', 'Vista comparar', '3 intensidades'],
    monthly: ['<b>Usos ilimitados</b>', '<b>4 escenas profesionales</b>: Email / Acta / Informe / Investigación', 'Cola prioritaria', 'Lote hasta 20 docs', 'Exportar Word / PDF', 'Soporte prioritario'],
    yearly: ['Todo el plan mensual', '<b>~€2.99/mes</b>', 'API (100k car./mes)', '2 puestos de equipo', 'Insignia anual'],
  },
};

const REVIEWS = {
  zh: [
    { stars: 5, name: '陈航', role: '外贸经理 · 深圳', color: '#6366f1', text: '每天要回 30+ 封英文邮件，AI 写完总是太「official」。TuiAI 邮件场景能让客户回得更快，复购率明显上去了。' },
    { stars: 5, name: 'Marie L.', role: 'PM · Paris', color: '#0ea5e9', text: '会议纪要从「让人想睡」变成「老板会主动点开」，决议和 action item 的结构识别非常精准。' },
    { stars: 5, name: '张启明', role: '产品总监 · 上海', color: '#f59e0b', text: '述职材料用了 Pro 之后，再也没有「赋能 / 闭环 / 抓手」了。年度评级直接 S。' },
  ],
  en: [
    { stars: 5, name: 'Sarah K.', role: 'Marketing Lead · NYC', color: '#6366f1', text: 'I write 20+ client emails daily. TuiAI strips the corporate AI tone and my reply rate jumped 35%.' },
    { stars: 5, name: 'Hiroshi T.', role: 'Consultant · Tokyo', color: '#0ea5e9', text: 'The meeting-notes scene is gold. Structure detection is so accurate clients think I hand-wrote them.' },
    { stars: 4, name: 'Diego R.', role: 'Researcher · Madrid', color: '#f59e0b', text: 'Research mode keeps every citation. My professor stopped asking if I used ChatGPT.' },
  ],
  ja: [
    { stars: 5, name: '佐藤健', role: 'マーケ・東京', color: '#6366f1', text: 'メール返信が自然に。お客様の返信率が体感で 30% 上がった。' },
    { stars: 5, name: '王雪', role: 'コンサル・大阪', color: '#0ea5e9', text: '議事録の構造化が秀逸。決議とアクションが一目で分かる。' },
    { stars: 5, name: 'Maria S.', role: '研究員・京都', color: '#f59e0b', text: '報告書が AI 検出を完全に通過。年度評価が上がりました。' },
  ],
  es: [
    { stars: 5, name: 'Lucía F.', role: 'Marketing · Madrid', color: '#6366f1', text: 'Mis emails ahora suenan humanos. La tasa de respuesta subió un 30%.' },
    { stars: 5, name: 'Carlos M.', role: 'Consultor · CDMX', color: '#0ea5e9', text: 'Las actas de reuniones quedan estructuradas como las haría un humano experto.' },
    { stars: 5, name: 'Sofia G.', role: 'Investigadora · BCN', color: '#f59e0b', text: 'Conserva todas las citas. Mi tutor dejó de sospechar.' },
  ],
};

/* ===================== 3. 价格（按语言自动切换币种） ===================== */
const PRICING = {
  zh: { sym:'¥', single:'¥9.9', monthly:'¥29', monthly_was:'¥49', yearly:'¥199', yearly_was:'¥348',
        amt: { single:'¥9.90', monthly:'¥29.00', yearly:'¥199.00' },
        ctaMonthly:'立即解锁结果 · ¥29/月', ctaPack:'立即解锁结果 · ¥9.9/10次' },
  en: { sym:'$', single:'$1.99', monthly:'$4.99', monthly_was:'$8.99', yearly:'$29.9', yearly_was:'$52',
        amt: { single:'$1.99', monthly:'$4.99', yearly:'$29.90' },
        ctaMonthly:'Unlock now · $4.99/mo', ctaPack:'Unlock now · $1.99/10 runs' },
  ja: { sym:'¥', single:'¥300', monthly:'¥750', monthly_was:'¥1,280', yearly:'¥4,900', yearly_was:'¥8,400',
        amt: { single:'¥300', monthly:'¥750', yearly:'¥4,900' },
        ctaMonthly:'今すぐ解除 · ¥750/月', ctaPack:'今すぐ解除 · ¥300/10 回' },
  es: { sym:'€', single:'€1.49', monthly:'€3.99', monthly_was:'€6.99', yearly:'€24.9', yearly_was:'€44',
        amt: { single:'€1.49', monthly:'€3.99', yearly:'€24.90' },
        ctaMonthly:'Desbloquear · €3.99/mes', ctaPack:'Desbloquear · €1.49/10 usos' },
};

/* ===================== 4. 全球支付方式 ===================== */
const PAY_METHODS_ALL = [
  { id:'wechat',    name:{zh:'微信支付',  en:'WeChat Pay',    ja:'WeChat Pay',  es:'WeChat Pay'},   sub:{zh:'扫码支付，秒到账',   en:'Scan & pay instantly',     ja:'QR で即決済',          es:'Pago al instante'},      bg:'#07c160', ic:'💚' },
  { id:'alipay',    name:{zh:'支付宝',    en:'Alipay',        ja:'Alipay',      es:'Alipay'},       sub:{zh:'安全快捷',           en:'Secure & fast',            ja:'安全・高速',           es:'Seguro y rápido'},        bg:'#1677ff', ic:'💙' },
  { id:'card',      name:{zh:'信用卡 / 借记卡', en:'Credit / Debit Card', ja:'クレジット / デビット', es:'Tarjeta de crédito / débito'}, sub:{zh:'Visa · Mastercard · Amex · JCB', en:'Visa · Mastercard · Amex · JCB', ja:'Visa · Mastercard · Amex · JCB', es:'Visa · Mastercard · Amex · JCB'}, bg:'linear-gradient(135deg,#1a1a2e,#3b3b6d)', ic:'💳' },
  { id:'paypal',    name:{zh:'PayPal',    en:'PayPal',        ja:'PayPal',      es:'PayPal'},       sub:{zh:'全球通用，买家保护',  en:'Buyer protection worldwide', ja:'世界対応・買い手保護',  es:'Protección global al comprador'}, bg:'#003087', ic:'🅿️' },
  { id:'applepay',  name:{zh:'Apple Pay', en:'Apple Pay',     ja:'Apple Pay',   es:'Apple Pay'},    sub:{zh:'Face ID 一键支付',    en:'One-tap with Face ID',      ja:'Face ID で即決済',     es:'Un toque con Face ID'},   bg:'#000', ic:'' },
  { id:'gpay',      name:{zh:'Google Pay', en:'Google Pay',   ja:'Google Pay',  es:'Google Pay'},   sub:{zh:'一键安全支付',        en:'Fast & secure tap',         ja:'タップで安全決済',     es:'Pago seguro al instante'}, bg:'linear-gradient(135deg,#4285F4,#34A853)', ic:'G' },
  { id:'stripe',    name:{zh:'Stripe Link', en:'Stripe Link', ja:'Stripe Link', es:'Stripe Link'},  sub:{zh:'保存卡号，下次更快',   en:'Save card for one-click',   ja:'カード保存・次回はワンクリック', es:'Guarda tarjeta, próximo en un clic'}, bg:'linear-gradient(135deg,#635bff,#0a2540)', ic:'⚡' },
  { id:'klarna',    name:{zh:'Klarna · 分期',  en:'Klarna · Pay in 3', ja:'Klarna 分割払い', es:'Klarna · 3 cuotas'}, sub:{zh:'分 3 期，0 利息',  en:'Split into 3, 0% interest', ja:'3 回払い、金利 0%',    es:'3 cuotas sin interés'},   bg:'#ffa8cd', ic:'K' },
];
// 按地区排序：默认推荐排前
const PAY_BY_LANG = {
  zh: ['wechat','alipay','card','paypal','applepay'],
  en: ['card','paypal','applepay','gpay','stripe','klarna'],
  ja: ['card','paypal','applepay','gpay','stripe'],
  es: ['card','paypal','applepay','gpay','klarna','stripe'],
};

/* ===================== 5. 状态 ===================== */
const FREE_DAILY = 3;
let state = loadState();
let lang = localStorage.getItem('tuiai_lang') || (navigator.language || 'zh').slice(0,2).toLowerCase();
if(!I18N[lang]) lang = 'zh';
let scene = 'general';
let level = 'std';
let viewMode = 'diff';
let lastOrig = '', lastResult = '';
let pendingPlan = 'monthly';
let pwSelected = 'monthly';
let selectedPay = null;

function loadState(){
  try{
    const s = JSON.parse(localStorage.getItem('tuiai') || '{}');
    const today = new Date().toDateString();
    if(s.day !== today){ s.day = today; s.used = 0; }
    return { day: s.day, used: s.used || 0, credits: s.credits || 0, pro: s.pro || null };
  }catch(e){ return { day: new Date().toDateString(), used: 0, credits: 0, pro: null }; }
}
function saveState(){ localStorage.setItem('tuiai', JSON.stringify(state)); }
function isPro(){ return state.pro && new Date(state.pro.until) > new Date(); }
function remainFree(){ return Math.max(0, FREE_DAILY - state.used); }
function canUse(){ return isPro() || state.credits > 0 || remainFree() > 0; }
function consume(){
  if(isPro()) return;
  if(remainFree() > 0) state.used++;
  else if(state.credits > 0) state.credits--;
  saveState(); renderQuota();
}

const t = (k, ...args) => {
  const v = I18N[lang][k] ?? I18N.zh[k] ?? k;
  return typeof v === 'function' ? v(...args) : v;
};
const $ = id => document.getElementById(id);

/* ===================== 6. 改写引擎（场景化规则） ===================== */
const PHRASE_RULES = [
  [/首先[，,]?/g, ['先说','一上来，','']],
  [/其次[，,]?/g, ['然后','再就是','另外']],
  [/总而言之[，,]?/g, ['说白了','一句话，']],
  [/综上所述[，,]?/g, ['这么看下来，','说到底，','总的来看，']],
  [/总的来说[，,]?/g, ['整体看，','说实话，']],
  [/值得注意的是[，,]?/g, ['有一点要留心：','提醒一句，','注意，']],
  [/值得一提的是[，,]?/g, ['顺带说一句，','插一句，']],
  [/不可否认[，,]?/g, ['确实，','说真的，']],
  [/众所周知[，,]?/g, ['大家都知道','你应该也清楚']],
  [/与此同时[，,]?/g, ['同时','另一头，']],
  [/在当今(?:社会|时代)[，,]?/g, ['现在','这年头','眼下']],
  [/在当今快速发展的时代[，,]?/g, ['这几年','眼下']],
  [/随着.{2,12}的(?:不断)?(?:发展|进步|普及)[，,]?/g, ['这几年','最近几年']],
  [/具有重要(?:的)?意义/g, ['挺关键的','很要紧','分量不轻']],
  [/扮演着?(?:至关重要|重要)的角色/g, ['很关键','少不了它','占了大头']],
  [/起到了?(?:至关重要|关键|重要)的作用/g, ['帮了大忙','很顶用','相当关键']],
  [/(?:至关重要|举足轻重)/g, ['特别关键','顶要紧']],
  [/不仅仅是/g, ['不只是','可不光是']],
  [/然而[，,]?/g, ['不过','可是','但话说回来，']],
  [/因此[，,]?/g, ['所以','这么一来，','于是']],
  [/此外[，,]?/g, ['另外','还有，','再说']],
  [/(?:从而|进而)/g, ['这样就','顺势']],
  [/(?:旨在|致力于)/g, ['想要','就是为了','奔着']],
  [/(?:助力|赋能)/g, ['帮','推一把']],
  [/深入(?:探讨|分析|研究|了解)/g, ['好好聊聊','掰开看看','仔细琢磨']],
  [/(?:全面|深刻)地?(?:理解|认识|把握|改变)/g, ['真正搞懂','实实在在地改变']],
  [/提供了?(?:强有力的|有力的|坚实的)(?:支持|保障|支撑)/g, ['撑住了场面','兜了底']],
  [/(?:极大地?|大大|显著)(?:提升|提高|增强|改善)了?/g, ['明显拉高了','提了一大截，','提了不少']],
  [/(?:得到了)?广泛(?:的)?应用/g, ['到处都在用','用的人很多']],
  [/日益(?:增长|增加|提升|凸显)/g, ['越来越多','一天比一天明显']],
  [/(?:蓬勃|迅猛|快速)发展/g, ['长得飞快','势头很猛']],
  [/呈现出?.{0,4}(?:趋势|态势)/g, ['看着是这个走向','苗头很明显']],
  [/(?:毋庸置疑|毫无疑问)[，,]?/g, ['不用怀疑，','这个没跑，']],
  [/(?:让我们|使我们)(?:能够)?共同/g, ['咱们一起']],
  [/(?:让我们|使我们)(?:能够)?/g, ['我们可以','咱们能']],
  [/我们(?:需要|应该|必须)认识到[，,]?/g, ['得明白一点：','有个事实绕不开：']],
  [/(?:能够|可以)有效地?/g, ['能实打实地','真能']],
  [/在很大程度上/g, ['多半','基本上']],
  [/一定程度上/g, ['多少','或多或少']],
  [/换言之[，,]?/g, ['换句话说，','也就是说，']],
  [/由此可见[，,]?/g, ['这么一看，','可见']],
  [/(?:将会|终将)/g, ['会','迟早会']],
  [/积极拥抱/g, ['主动接住','别躲着']],
  [/把握机遇/g, ['抓住机会','接住这波红利']],
  [/共同期待/g, ['一起等着看']],
];

// 场景增强规则
const SCENE_RULES = {
  email: [
    [/希望此邮件您一切安好[。，,]?/g, ['','见信好。','你好，']],
    [/希望您一切都好[。，,]?/g, ['','你好，']],
    [/我希望这封邮件能找到您一切都好[。，,]?/g, ['','你好，']],
    [/此致敬礼/g, ['此致','顺祝商祺','保持联系']],
    [/不胜感激/g, ['非常感谢','感谢你的支持','麻烦你了']],
    [/期待您的(?:回复|回函)/g, ['等你回复','期待你的消息']],
    [/如蒙(?:回复|赐复)/g, ['方便回个消息','回我一下就好']],
    [/特此(?:致函|来信)/g, ['写这封信','发这封邮件']],
    [/烦请(?:您)?/g, ['麻烦你','麻烦帮忙']],
    [/万分感谢/g, ['非常感谢','超级感谢']],
    [/I hope this email finds you well[.,]?/gi, ['Hi','Hey','']],
    [/I hope you are doing well[.,]?/gi, ['Hi','Hope things are good — ']],
    [/Please do not hesitate to contact/gi, ['Feel free to reach out to','Just ping']],
    [/Looking forward to hearing from you/gi, ['Looking forward to your reply','Talk soon']],
    [/Best regards,?/gi, ['Thanks,','Cheers,','Best,']],
    [/Furthermore,?/gi, ['Also,','Plus,']],
    [/I am writing to inform you/gi, ['Quick note —','Just letting you know']],
  ],
  meeting: [
    [/(?:^|\n)(?:本次|这次|此次)?会议(?:主要)?(?:讨论|围绕|聚焦)了?/g, m => m.replace(/(?:本次|这次|此次)?会议(?:主要)?(?:讨论|围绕|聚焦)了?/,'议题：')],
    [/经过(?:充分|深入)?讨论[，,]?/g, ['讨论后，','大家过了一遍后，']],
    [/达成了?(?:一致|共识)/g, ['一致同意','拍板']],
    [/会议决定/g, ['【决议】','决议：']],
    [/后续(?:工作|安排|计划)/g, ['【行动项】','下一步：']],
    [/责任人|负责人/g, ['负责人']],
    [/截止(?:日期|时间)?/g, ['DDL']],
    [/明确了?(?:下一步|后续)(?:工作|计划)/g, ['列出了行动项']],
  ],
  report: [
    [/赋能/g, ['帮到','支持到']],
    [/抓手/g, ['切入点','突破口']],
    [/闭环/g, ['完整流程','跑通']],
    [/打法/g, ['做法','策略']],
    [/链路/g, ['流程','环节']],
    [/拉通/g, ['对齐','打通']],
    [/沉淀/g, ['沉下来','积累']],
    [/对标/g, ['对照','参考']],
    [/拆解/g, ['拆开看','分解']],
    [/复盘/g, ['回顾','回看']],
    [/抓手/g, ['切入点']],
    [/打透/g, ['做深','做到位']],
    [/做厚/g, ['做深做扎实']],
    [/(?:取得|实现)了?(?:显著|重大|阶段性)的?(?:成果|进展|突破)/g, ['有了实打实的进展','拿到了阶段性结果']],
    [/在.{0,8}方面取得了?突破/g, ['在这块跑通了']],
    [/超额完成/g, ['完成度超过 100%','超出目标']],
    [/圆满完成/g, ['按计划完成','顺利收尾']],
  ],
  research: [
    [/研究表明/g, ['数据显示','从样本看']],
    [/由此可以得出结论/g, ['可以归纳为','从中能看到']],
    [/数据显示.{0,4}存在显著差异/g, ['数据上有明显落差']],
    [/具有统计学意义/g, ['在统计上站得住']],
    [/调研结果显示/g, ['受访样本反馈','调研里看到']],
    [/受访者(?:普遍)?认为/g, ['多数受访者表示','大家普遍提到']],
    [/综合分析/g, ['综合看','把几个维度拼一起']],
    [/进一步研究表明/g, ['再往下看','深入一层会发现']],
    [/竞品分析/g, ['对照同类产品']],
  ],
};

const DEEP_RULES = [
  [/；/g, ['。','，']],
  [/这(?:意味着|表明|说明)/g, ['说明','换句话说就是','也就是']],
  [/对于(.{1,12}?)(?:来说|而言)[，,]?/g, ['$1这边，','搁$1身上，']],
  [/通过(.{1,16}?)[，,]/g, ['靠$1，','借着$1，']],
  [/基于(.{1,12}?)[，,]/g, ['按$1来看，','从$1出发，']],
];
const CASUAL_OPENERS = ['说实话，','讲真，','你发现没，','有意思的是，','老实讲，'];
const AI_MARKERS = [
  /首先|其次|综上所述|总而言之|总的来说/g,
  /值得注意的是|值得一提的是|不可否认|众所周知|毋庸置疑|毫无疑问/g,
  /与此同时|在当今|随着.{2,10}的发展|日新月异|信息爆炸/g,
  /至关重要|举足轻重|重要(的)?意义|关键(的)?作用|扮演着/g,
  /深入探讨|全面理解|广泛应用|日益|蓬勃发展|迅猛发展|呈现出|态势|赋能|助力|旨在|致力于|抓手|闭环|链路|拉通|沉淀|对标|复盘/g,
  /极大地|显著提升|有效地|强有力|坚实的|系统的分析/g,
  /让我们|由此可见|换言之|从而|进而|然而|因此|此外/g,
  /I hope this email finds you well|Furthermore|Moreover|In conclusion|It is worth noting|It should be noted/gi,
];

let seedState = 42;
function srand(){ seedState = (seedState * 1103515245 + 12345) & 0x7fffffff; return seedState / 0x7fffffff; }
function pick(arr){ return arr[Math.floor(srand() * arr.length)]; }

function aiScore(text){
  if(!text.trim()) return 0;
  let hits = 0;
  AI_MARKERS.forEach(re => { const m = text.match(re); if(m) hits += m.length; });
  const per1k = hits / Math.max(text.length, 1) * 1000;
  const bullets = (text.match(/[一二三四五六七八九十\d][、.．）)]/g) || []).length;
  return Math.min(100, Math.round(per1k * 9 + bullets * 2 + (hits > 0 ? 18 : 0)));
}

function applyRules(text, rules){
  let out = text;
  for(const [re, repls] of rules){
    if(typeof repls === 'function'){ out = out.replace(re, repls); continue; }
    out = out.replace(re, (...args) => {
      let r = pick(repls);
      if(r === undefined || r === null) return args[0];
      r = r.replace(/\$(\d)/g, (_, i) => args[parseInt(i)] || '');
      return r;
    });
  }
  return out;
}

function humanizeText(text, lv, sc){
  seedState = 42 + text.length;
  let out = text;
  // 场景增强先于通用：邮件去开场白等结构性改动效果更明显
  if(SCENE_RULES[sc]) out = applyRules(out, SCENE_RULES[sc]);
  out = applyRules(out, PHRASE_RULES);
  if(lv === 'deep'){
    out = applyRules(out, DEEP_RULES);
    out = out.split('\n').map(p => {
      const tt = p.trim();
      if(tt.length > 40 && srand() < 0.35 && !/^[#\-\d一二三四【]/.test(tt) && sc !== 'email' && sc !== 'meeting'){
        return pick(CASUAL_OPENERS) + p.replace(/^(\s*)/, '');
      }
      return p;
    }).join('\n');
    out = out.replace(/([^，。\n]{18,})，([^，。\n]{18,})，/g, '$1，$2。');
  }
  if(lv !== 'light'){
    out = out.replace(/(?:非常|十分|极其|相当)(?=[\u4e00-\u9fa5]{2})/g, m => srand() < 0.5 ? '挺' : m);
  }
  out = out.replace(/，{2,}/g, '，').replace(/(^|\n)，/g, '$1').replace(/\n{3,}/g, '\n\n');
  return out;
}

/* 调用后端 /api/humanize（DeepSeek），失败时降级到本地规则版 */
async function humanizeViaAPI(text, lv, sc){
  try{
    const resp = await fetch('/api/humanize', {
      method:'POST',
      headers:{ 'Content-Type':'application/json' },
      body: JSON.stringify({ text, scene:sc, level:lv, lang }),
    });
    if(!resp.ok){
      console.warn('humanize API non-ok', resp.status);
      return null;
    }
    const data = await resp.json();
    if(data.ok && data.result) return data.result;
    console.warn('humanize API error', data.error);
    return null;
  }catch(e){
    console.warn('humanize API network error', e);
    return null;
  }
}

/* ===================== 7. 差异对比（逐段对位） ===================== */
function splitParas(text){
  // 按空行分割段落，同时保留换行格式
  return text.split('\n\n').filter(p => p.trim().length > 0);
}
function charDiff(a, b){
  const n = a.length, m = b.length;
  if(n * m > 400000){ return [[1,a],[2,b]]; }
  const dp = Array.from({length: n + 1}, () => new Uint16Array(m + 1));
  for(let i = 1; i <= n; i++)
    for(let j = 1; j <= m; j++)
      dp[i][j] = a[i-1] === b[j-1] ? dp[i-1][j-1] + 1 : Math.max(dp[i-1][j], dp[i][j-1]);
  const ops = [];
  let i = n, j = m;
  while(i > 0 && j > 0){
    if(a[i-1] === b[j-1]){ ops.push([0, a[i-1]]); i--; j--; }
    else if(dp[i-1][j] >= dp[i][j-1]){ ops.push([1, a[i-1]]); i--; }
    else { ops.push([2, b[j-1]]); j--; }
  }
  while(i > 0){ ops.push([1, a[i-1]]); i--; }
  while(j > 0){ ops.push([2, b[j-1]]); j--; }
  ops.reverse();
  const merged = [];
  for(const [tp, c] of ops){
    if(merged.length && merged[merged.length-1][0] === tp) merged[merged.length-1][1] += c;
    else merged.push([tp, c]);
  }
  return merged;
}
function esc(s){ return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
function buildDiffHtml(orig, result){
  // 如果整段不太长，直接做整段字符 diff（最精确）
  if(orig.length * result.length <= 400000){
    let html = '';
    for(const [tp, seg] of charDiff(orig, result)){
      if(tp === 0) html += esc(seg);
      else if(tp === 1) html += '<del>' + esc(seg) + '</del>';
      else html += '<ins>' + esc(seg) + '</ins>';
    }
    return html;
  }
  // 否则按段落分割，逐段对位
  const A = splitParas(orig), B = splitParas(result);
  let html = '';
  const len = Math.max(A.length, B.length);
  for(let k = 0; k < len; k++){
    const a = A[k] ?? '', b = B[k] ?? '';
    if(a === b){ html += esc(a) + '\n\n'; continue; }
    if(a.length * b.length <= 400000){
      for(const [tp, seg] of charDiff(a, b)){
        if(tp === 0) html += esc(seg);
        else if(tp === 1) html += '<del>' + esc(seg) + '</del>';
        else html += '<ins>' + esc(seg) + '</ins>';
      }
    } else {
      html += '<del>' + esc(a) + '</del><ins>' + esc(b) + '</ins>';
    }
    html += '\n\n';
  }
  return html;
}

/* ===================== 8. UI 渲染 ===================== */
function renderI18n(){
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const v = I18N[lang][key];
    if(v !== undefined && typeof v !== 'function') el.innerHTML = v;
  });
  // 当前语言显示
  $('curLang').textContent = LANG_NAMES[lang];
  // 语言菜单选中
  document.querySelectorAll('#langMenu button').forEach(b => b.classList.toggle('sel', b.dataset.lang === lang));
  // 输入框占位符
  $('input').placeholder = SCENES[scene].placeholder[lang] || SCENES[scene].placeholder.en;
  // 价格
  const pr = PRICING[lang];
  $('prSingle').textContent = pr.single;
  $('prMonthly').textContent = pr.monthly; $('prMonthlyWas').textContent = pr.monthly_was;
  $('prYearly').textContent = pr.yearly; $('prYearlyWas').textContent = pr.yearly_was;
  $('pwPrMonthly').textContent = pr.monthly; $('pwPrMonthlyWas').textContent = pr.monthly_was;
  $('pwPrSingle').textContent = pr.single;
  // plan features
  const ft = SCENE_FEATURES[lang] || SCENE_FEATURES.en;
  const renderList = (id, arr, addNo) => {
    $(id).innerHTML = arr.map(x => `<li>${x}</li>`).join('') + (addNo || '');
  };
  renderList('ulSingle', ft.single, '<li class="no">' + (lang==='zh'?'会议纪要 / 汇报 / 调研专属引擎':'Meeting / Report / Research engines') + '</li><li class="no">' + (lang==='zh'?'批量处理':'Batch processing') + '</li>');
  renderList('ulMonthly', ft.monthly);
  renderList('ulYearly', ft.yearly);
  // reviews
  $('reviewGrid').innerHTML = (REVIEWS[lang] || REVIEWS.en).map(r => `
    <div class="review">
      <div class="stars">${'★'.repeat(r.stars)}${'☆'.repeat(5 - r.stars)}</div>
      <p>"${r.text}"</p>
      <div class="reviewer">
        <div class="avatar" style="background:${r.color}">${r.name.slice(0,1)}</div>
        <div><b>${r.name}</b><span>${r.role}</span></div>
      </div>
    </div>`).join('');
  // scenes
  renderScenes();
  // tech / why / benefits copy
  renderCopyBlocks();
  // current scene tip
  applyScene(scene, true);
  // quota
  renderQuota();
  // input metrics
  onInput();
  // pw cta
  $('pwCta').textContent = pwSelected === 'monthly' ? pr.ctaMonthly : pr.ctaPack;
  // go button text
  const goBtn = $('goBtn');
  if(goBtn) goBtn.innerHTML = `<span data-i18n="btn_go">${t('btn_go')}</span>`;
  // live ticker
  rotateLive(true);
}

function renderCopyBlocks(){
  // 技术优势卡片
  const techs = TECH_CARDS[lang] || TECH_CARDS.en;
  $('techGrid').innerHTML = techs.map(c => `
    <div class="tech-card">
      <span class="tn">${c.n}</span>
      <div class="ti">${c.ic}</div>
      <h3>${c.title}</h3>
      <p>${c.desc}</p>
      <div class="tmeta">
        <div><b>${c.m1}</b><span>${c.m1l}</span></div>
        <div><b>${c.m2}</b><span>${c.m2l}</span></div>
      </div>
    </div>`).join('');

  // 产品特性卡片 (8 大白描能力)
  const feats = FEAT_CARDS[lang] || FEAT_CARDS.en;
  $('featGrid').innerHTML = feats.map(c => `
    <div class="feat-card">
      <span class="fi">${c.i}</span>
      <h3>${c.t}</h3>
      <p>${c.d}</p>
      <span class="ftag">${c.tag}</span>
    </div>`).join('');

  // 情感金句 + 三张人文卡片
  const cb = COPY_BLOCKS[lang] || COPY_BLOCKS.en;
  $('whyQuote').innerHTML = cb.why_quote + '<span class="why-quote-by">' + cb.why_quote_by + '</span>';
  const whys = WHY_CARDS[lang] || WHY_CARDS.en;
  $('whyCards').innerHTML = whys.map(w => `
    <div class="why-card ${w.c}">
      <div class="wi">${w.i}</div>
      <div>
        <h4>${w.t}</h4>
        <p>${w.d}</p>
      </div>
    </div>`).join('');

  // 收益卡片
  const bnfs = BNF_CARDS[lang] || BNF_CARDS.en;
  $('bnfGrid').innerHTML = bnfs.map(b => `
    <div class="bnf">
      <span class="bi">${b.ic}</span>
      <div class="bnum">${b.num}</div>
      <h4>${b.t}</h4>
      <p>${b.d}</p>
    </div>`).join('');

  // CTA 横幅
  $('ctaTitle').textContent = cb.cta_title;
  $('ctaSub').textContent = cb.cta_sub;
  $('ctaBtn').textContent = cb.cta_btn;
  $('ctaSmall').textContent = cb.cta_small;
}

function renderScenes(){
  $('sceneList').innerHTML = Object.entries(SCENES).map(([k,s]) => `
    <div class="scene ${k===scene?'active':''}" data-scene="${k}" onclick="applyScene('${k}')">
      <div class="ic">${s.icon}</div>
      <div class="nm">${s.names[lang] || s.names.en}</div>
      <div class="ds">${s.desc[lang] || s.desc.en}</div>
    </div>`).join('');
}

function applyScene(k, silent){
  const sc = SCENES[k];
  if(!sc) return;
  scene = k;
  document.querySelectorAll('.scene').forEach(el => el.classList.toggle('active', el.dataset.scene === k));
  $('input').placeholder = sc.placeholder[lang] || sc.placeholder.en;
  const [ti, ds] = sc.tip[lang] || sc.tip.en;
  $('tipTitle').textContent = ti;
  $('tipBody').textContent = ' ' + ds;
  $('tipUpsell').textContent = '';
  $('sceneTip').style.display = 'flex';
}

function setLevel(l, btn){
  level = l;
  document.querySelectorAll('.intensity button').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}
function setView(v){
  viewMode = v;
  $('viewDiff').classList.toggle('active', v === 'diff');
  $('viewClean').classList.toggle('active', v === 'clean');
  renderOutput();
}
function renderOutput(){
  const out = $('output');
  if(!lastResult){
    out.classList.add('empty');
    out.innerHTML = t('out_empty');
    $('outCount').textContent = '';
    $('outScore').innerHTML = '';
    return;
  }
  out.classList.remove('empty');
  out.innerHTML = viewMode === 'diff' ? buildDiffHtml(lastOrig, lastResult) : esc(lastResult);
  $('outCount').textContent = lastResult.length + t('word_unit');
  $('outScore').innerHTML = scoreChip(aiScore(lastResult), lang==='zh'?'去味后':lang==='ja'?'処理後':lang==='es'?'Después':'After');
}
function scoreChip(s, label){
  const cls = s >= 50 ? 'bad' : s >= 25 ? 'mid' : 'good';
  const face = s >= 50 ? '🤖' : s >= 25 ? '😐' : '😊';
  return `<span class="score-chip ${cls}">${face} ${label} ${lang==='zh'?'AI味指数 ':'AI score '} ${s}</span>`;
}

function renderQuota(){
  const pill = $('quotaPill');
  pill.textContent = lang==='zh' ? '免费使用' : lang==='ja' ? '無料で利用' : lang==='es' ? 'Gratis' : 'Free';
  pill.className = 'quota-pill free';
}

/* ===================== 9. 核心动作 ===================== */
async function humanize(){
  const text = $('input').value;
  if(!text.trim()){ toast(t('toast_paste')); return; }

  const btn = $('goBtn');
  btn.disabled = true;
  btn.innerHTML = '<span class="spin"></span> ' + (lang==='zh'?'正在去味…':lang==='ja'?'処理中…':lang==='es'?'Procesando…':'Working…');

  // 优先调用后端 DeepSeek API，失败降级到本地规则版
  let result = await humanizeViaAPI(text, level, scene);
  if(!result){
    // 兜底：本地规则版（保证 demo 永远可用）
    result = humanizeText(text, level, scene);
  }

  lastOrig = text;
  lastResult = result;
  renderOutput();
  btn.disabled = false;
  btn.innerHTML = `<span data-i18n="btn_go">${t('btn_go')}</span>`;
}

const DEMO = {
  general: {
    zh:`在当今快速发展的时代，人工智能技术正在蓬勃发展，并在各行各业中扮演着至关重要的角色。首先，AI能够有效地提升工作效率，极大地改善了人们的生产方式。其次，值得注意的是，AI在医疗、教育等领域也得到了广泛应用，具有重要意义。\n\n然而，不可否认，AI的发展也带来了一些挑战。综上所述，让我们共同期待一个更加智能化的未来。`,
    en:`In today's rapidly evolving era, artificial intelligence is flourishing and plays a pivotal role across industries. Furthermore, it is worth noting that AI has been widely applied in healthcare and education, holding significant importance. Moreover, we must recognize that, in conclusion, AI will profoundly transform our lives.`,
    ja:`今日の急速に発展する時代において、AI 技術は飛躍的に発展し、各業界で極めて重要な役割を果たしています。さらに、注目すべきは、AI が医療や教育の分野でも広く応用されている点です。総じて、私たちはより知能化された未来を共に期待しましょう。`,
    es:`En la era actual de rápido desarrollo, la inteligencia artificial florece y desempeña un papel crucial en todas las industrias. Además, cabe destacar que la IA se ha aplicado ampliamente en salud y educación. En conclusión, debemos abrazar activamente esta transformación.`,
  },
  email: {
    zh:`尊敬的张总，\n\n希望此邮件您一切安好。我们公司经过深入分析，认为贵司在行业内扮演着至关重要的角色。综上所述，我们诚挚地希望能与贵司展开全面而深入的合作，从而共同助力双方业务的蓬勃发展。\n\n烦请您在百忙之中拨冗回复，期待您的回函。\n\n此致敬礼`,
    en:`Dear Mr. Zhang,\n\nI hope this email finds you well. After thorough analysis, we believe your company plays a pivotal role in the industry. Furthermore, we sincerely hope to engage in comprehensive cooperation that will empower the flourishing development of both parties. Please do not hesitate to contact us. Looking forward to hearing from you.\n\nBest regards,`,
    ja:`張様\n\nいつもお世話になっております。弊社は深く分析した結果、貴社は業界において極めて重要な役割を果たしていると確信しております。何卒、深いご協力を賜りますようお願い申し上げます。ご返信を心よりお待ちしております。`,
    es:`Estimado Sr. Zhang:\n\nEspero que este correo le encuentre bien. Tras un análisis profundo, creemos que su empresa desempeña un papel crucial en la industria. Esperamos sinceramente entablar una cooperación integral que impulse el florecimiento de ambas partes. No dude en contactarnos.`,
  },
  meeting: {
    zh:`本次会议主要讨论了Q3产品规划。经过充分讨论，与会人员达成了一致。值得注意的是，会议决定下个月启动新功能开发，由李明负责，截止时间为9月30日。综上所述，会议明确了下一步工作。`,
    en:`This meeting primarily discussed Q3 product planning. After thorough discussion, all participants reached consensus. It is worth noting that the meeting decided to launch new feature development next month, led by Li Ming, with a deadline of September 30th. In conclusion, the meeting clarified next steps.`,
    ja:`本会議では Q3 製品計画について議論しました。十分な議論を経て、参加者全員が合意に達しました。注目すべきは、来月から新機能開発を開始し、李明が責任者、締切は 9 月 30 日と決定された点です。`,
    es:`Esta reunión abordó la planificación de producto Q3. Tras una discusión exhaustiva, los participantes alcanzaron consenso. Cabe destacar que se decidió lanzar el desarrollo de nuevas funciones el próximo mes, liderado por Li Ming, con fecha límite 30 de septiembre.`,
  },
  report: {
    zh:`Q3期间，本团队深入贯彻"以用户为中心"的理念，全面赋能业务增长。我们通过深度拆解用户链路，找到了核心抓手，最终成功打透了关键场景，实现了显著的业务增长。综上所述，团队取得了阶段性突破，下一阶段将持续沉淀方法论，对标行业头部进行复盘优化。`,
    en:`In Q3, our team deeply embraced the user-centric philosophy and comprehensively empowered business growth. By deeply deconstructing the user journey, we identified the core leverage point and successfully achieved breakthroughs in key scenarios, realizing significant business growth. In conclusion, the team achieved phased breakthroughs.`,
    ja:`Q3 において、当チームは「ユーザー第一」を深く実践し、ビジネス成長を全面的にエンパワーしました。ユーザー導線を深掘りすることで、核心となる切り口を特定し、重要シーンでの突破を実現しました。`,
    es:`En Q3, nuestro equipo abrazó profundamente la filosofía centrada en el usuario y empoderó integralmente el crecimiento del negocio. Al deconstruir profundamente el recorrido del usuario, identificamos la palanca clave y logramos avances significativos.`,
  },
  research: {
    zh:`研究表明，在受访的500名用户中，78%认为产品体验"良好"。数据显示，付费用户与免费用户在使用频率上存在显著差异，且具有统计学意义。综上所述，受访者普遍认为产品具有重要的市场价值，由此可以得出结论：产品已具备规模化推广的条件。`,
    en:`Research shows that among the 500 surveyed users, 78% rated the product experience as "good." Data indicates that paid and free users exhibit statistically significant differences in usage frequency. In conclusion, respondents generally believe the product holds important market value, from which we can conclude it is ready for scaled rollout.`,
    ja:`調査によると、500 名の回答者のうち 78% が製品体験を「良好」と評価しました。データは有料・無料ユーザー間で利用頻度に統計的有意差があることを示しています。`,
    es:`La investigación muestra que de los 500 usuarios encuestados, el 78% calificó la experiencia como "buena". Los datos indican diferencias estadísticamente significativas en frecuencia de uso entre usuarios de pago y gratuitos.`,
  },
};

function loadDemo(){
  $('input').value = (DEMO[scene] && DEMO[scene][lang]) || DEMO[scene].en || DEMO.general[lang] || DEMO.general.en;
  onInput();
}
function clearInput(){
  $('input').value = '';
  lastOrig = '';
  lastResult = '';
  renderOutput();
  onInput();
}
function onInput(){
  const txt = $('input').value;
  $('inCount').textContent = txt.length + t('word_unit');
  $('inScore').innerHTML = txt.trim() ? scoreChip(aiScore(txt), lang==='zh'?'原文':lang==='ja'?'原文':lang==='es'?'Original':'Source') : '';
}
function copyResult(){
  if(!lastResult){ toast(t('toast_no_result')); return; }
  navigator.clipboard.writeText(lastResult).then(() => toast(t('toast_copied')));
}
function toast(msg){
  const el = $('toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(el._timer);
  el._timer = setTimeout(() => el.classList.remove('show'), 2800);
}

/* ===================== 10. 付费墙 ===================== */
let cdTimer = null, liveTimer = null, liveIdx = 0;
function openPaywall(source, customT, customS){
  const title = $('pwTitle'), sub = $('pwSub');
  if(customT){ title.textContent = customT; sub.textContent = customS || ''; }
  else if(source === 'quota'){ title.textContent = t('paywall_quota_t'); sub.textContent = t('paywall_quota_s'); }
  else if(source === 'lastfree'){ title.textContent = t('paywall_last_t'); sub.textContent = t('paywall_last_s'); }
  else if(source === 'scene'){
    const sc = SCENES[scene];
    title.textContent = t('paywall_scene_t');
    sub.textContent = t('paywall_scene_s').replace('{name}', sc.names[lang] || sc.names.en);
  } else { title.textContent = t('paywall_default_t'); sub.textContent = t('paywall_default_s'); }
  $('paywallMask').classList.add('show');
  startCountdown();
  rotateLive(true);
}
function closePaywall(){ $('paywallMask').classList.remove('show'); clearInterval(cdTimer); clearInterval(liveTimer); }
function startCountdown(){
  let end = parseInt(localStorage.getItem('tuiai_cd') || '0');
  if(!end || end < Date.now()){ end = Date.now() + 15 * 60 * 1000; localStorage.setItem('tuiai_cd', String(end)); }
  clearInterval(cdTimer);
  const tick = () => {
    const left = Math.max(0, end - Date.now());
    $('cdM').textContent = String(Math.floor(left / 60000)).padStart(2, '0');
    $('cdS').textContent = String(Math.floor(left % 60000 / 1000)).padStart(2, '0');
  };
  tick();
  cdTimer = setInterval(tick, 1000);
}
const LIVE_MSGS = {
  zh: [
    '刚刚，杭州的 用户***82 订阅了 Pro 月度版',
    '2 分钟前，深圳的 用户***19 购买了次数包',
    '5 分钟前，北京的 用户***07 订阅了 Pro 年度版',
    '刚刚，成都的 用户***55 升级了「会议纪要」场景',
    '8 分钟前，上海的 用户***33 购买了 Pro 年度版',
  ],
  en: [
    'Just now, Alex from NYC subscribed to Pro Monthly',
    '2 min ago, Sam from London bought a credits pack',
    '5 min ago, Maria from Berlin upgraded to Pro Annual',
    'Just now, John from Toronto unlocked Meeting Notes',
    '8 min ago, Priya from Mumbai joined Pro Annual',
  ],
  ja: [
    'たった今、東京の ユーザー***82 が Pro 月額を購読',
    '2 分前、大阪の ユーザー***19 がクレジットを購入',
    '5 分前、福岡の ユーザー***07 が年額版にアップグレード',
    'たった今、名古屋の ユーザー***55 が議事録を解除',
  ],
  es: [
    'Hace un momento, Lucía de Madrid se suscribió a Pro Mensual',
    'Hace 2 min, Carlos de Bogotá compró un paquete',
    'Hace 5 min, Sofía de BCN subió a Pro Anual',
    'Justo ahora, Diego de México desbloqueó Actas',
  ],
};
function rotateLive(reset){
  clearInterval(liveTimer);
  const msgs = LIVE_MSGS[lang] || LIVE_MSGS.en;
  if(reset) liveIdx = 0;
  $('liveMsg').textContent = msgs[liveIdx];
  liveTimer = setInterval(() => {
    liveIdx = (liveIdx + 1) % msgs.length;
    $('liveMsg').textContent = msgs[liveIdx];
  }, 3500);
}
function selPlan(p){
  pwSelected = p;
  $('pwMonthly').classList.toggle('sel', p === 'monthly');
  $('pwSingle').classList.toggle('sel', p === 'single');
  const pr = PRICING[lang];
  $('pwCta').textContent = p === 'monthly' ? pr.ctaMonthly : pr.ctaPack;
}
function payFromWall(){ closePaywall(); startPay(pwSelected); }

/* ===================== 11. 支付（多渠道） ===================== */
const PLAN_NAMES = {
  zh: { single:'次数包 ×10', monthly:'Pro 月度订阅', yearly:'Pro 年度订阅' },
  en: { single:'Credits pack ×10', monthly:'Pro Monthly', yearly:'Pro Annual' },
  ja: { single:'クレジット ×10', monthly:'Pro 月額', yearly:'Pro 年額' },
  es: { single:'Paquete ×10', monthly:'Pro Mensual', yearly:'Pro Anual' },
};
const PLAN_DESC = {
  zh: { single:'10 次去味额度 · 永久有效', monthly:'订阅可随时取消，到期前不再扣费即可', yearly:'折合每月仅 ¥16.6 · 含全部 Pro 权益' },
  en: { single:'10 credits · never expire', monthly:'Cancel anytime, no questions asked', yearly:'~$2.49/mo effectively · All Pro features' },
  ja: { single:'10 回分 · 有効期限なし', monthly:'いつでも解約可能', yearly:'月換算 ¥408 · 全 Pro 機能' },
  es: { single:'10 créditos · sin caducidad', monthly:'Cancela cuando quieras', yearly:'~€2.07/mes · Todas las funciones Pro' },
};

function startPay(plan){
  pendingPlan = plan;
  const pr = PRICING[lang];
  $('payTitle').textContent = t('confirm_order') + ' · ' + PLAN_NAMES[lang][plan];
  $('payDesc').textContent = PLAN_DESC[lang][plan];
  $('payAmt').textContent = pr.amt[plan];
  $('payAmtNote').textContent = plan === 'monthly' ? (lang==='zh'?'每月自动续费 · 随时可取消':lang==='ja'?'毎月自動更新 · 解約自由':lang==='es'?'Renovación mensual · Cancela cuando quieras':'Renews monthly · cancel anytime')
                            : plan === 'yearly' ? (lang==='zh'?'每年自动续费 · 比月度版省 43%':lang==='ja'?'毎年自動更新 · 月額より 43% お得':lang==='es'?'Renovación anual · 43% más barato':'Renews yearly · 43% off monthly')
                            : (lang==='zh'?'一次性付费 · 永久有效':lang==='ja'?'一括 · 永久有効':lang==='es'?'Pago único · sin caducidad':'One-time · never expires');
  renderPayMethods();
  $('payMask').classList.add('show');
  updatePayCta();
}
function renderPayMethods(){
  const order = PAY_BY_LANG[lang] || PAY_BY_LANG.en;
  const methods = order.map(id => PAY_METHODS_ALL.find(m => m.id === id)).filter(Boolean);
  selectedPay = methods[0].id;
  $('payList').innerHTML = methods.map((m, i) => {
    const tag = i === 0 ? `<span class="pm-tag">${lang==='zh'?'推荐':lang==='ja'?'推奨':lang==='es'?'Recomendado':'Recommended'}</span>` : '';
    return `<div class="pay-method ${i===0?'sel':''}" data-pm="${m.id}" onclick="selectPay('${m.id}')">
      <div class="pm-ic" style="background:${m.bg}">${m.ic}</div>
      <div class="pm-name">${m.name[lang]||m.name.en}<small>${m.sub[lang]||m.sub.en}</small></div>
      ${tag}
    </div>`;
  }).join('');
}
function selectPay(id){
  selectedPay = id;
  document.querySelectorAll('.pay-method').forEach(el => el.classList.toggle('sel', el.dataset.pm === id));
  updatePayCta();
}
function updatePayCta(){
  const m = PAY_METHODS_ALL.find(p => p.id === selectedPay);
  const name = m ? (m.name[lang] || m.name.en) : '';
  const pay = lang==='zh' ? `使用 ${name} 支付 ${PRICING[lang].amt[pendingPlan]}`
             : lang==='ja' ? `${name} で ${PRICING[lang].amt[pendingPlan]} を支払う`
             : lang==='es' ? `Pagar ${PRICING[lang].amt[pendingPlan]} con ${name}`
             : `Pay ${PRICING[lang].amt[pendingPlan]} with ${name}`;
  $('payConfirm').textContent = pay;
}
function closePay(){ $('payMask').classList.remove('show'); }
function finishPay(){
  closePay();
  if(pendingPlan === 'single'){
    state.credits += 10;
    toast(t('toast_pack_ok'));
  } else {
    const days = pendingPlan === 'yearly' ? 365 : 30;
    state.pro = { plan: pendingPlan, until: new Date(Date.now() + days * 86400000).toISOString() };
    toast(t('toast_pro_ok'));
  }
  saveState();
  renderQuota();
  // 解锁后重新尝试当前场景
  if(SCENES[scene] && SCENES[scene].pro) applyScene(scene, true);
}

/* ===================== 12. 语言切换 ===================== */
function toggleLangMenu(e){
  e.stopPropagation();
  $('langMenu').classList.toggle('show');
}
document.addEventListener('click', () => $('langMenu').classList.remove('show'));
document.getElementById('langMenu').addEventListener('click', e => {
  const btn = e.target.closest('button[data-lang]');
  if(!btn) return;
  lang = btn.dataset.lang;
  localStorage.setItem('tuiai_lang', lang);
  $('langMenu').classList.remove('show');
  renderI18n();
});

/* ===================== 13. 初始化 ===================== */
$('input').addEventListener('input', onInput);
$('paywallMask').addEventListener('click', e => { if(e.target.id === 'paywallMask') closePaywall(); });
$('payMask').addEventListener('click', e => { if(e.target.id === 'payMask') closePay(); });
renderI18n();
