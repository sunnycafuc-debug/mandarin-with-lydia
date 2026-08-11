# 每周访问量周报 - 执行说明

本文件供小柚子（Codex）的每周自动化（每周一 09:00，Asia/Shanghai）读取使用。每次运行时先读本文件，再按此执行。

## 两个站点
| 站点 | 域名 | 项目 ID（Vercel） |
| --- | --- | --- |
| Yunli Studio | yunlistudio.com | prj_LxO4hKyZ9KZAX6QYkx0kb0p3T9ub |
| Mandarin with Lydia | lydiamandarin.com | prj_9ezTRMfqRSL0I34AaqZNVXpxwy4i |

团队 ID（teamId）：team_k6gI9mfTPAhV7WbZMikcK8as
Vercel 令牌：读取 `/Users/lydia/Library/Application Support/com.vercel.cli/auth.json` 的 `token` 字段（注意路径有空格，读取时用引号）。

## 数据源 1（主）：Vercel Web Analytics API
免费、官方、已实测可用，两个站共用同一 token。命令模板：

```bash
TOKEN=$(python3 -c "import json;print(json.load(open('/Users/lydia/Library/Application Support/com.vercel.cli/auth.json'))['token'])")
TEAM="team_k6gI9mfTPAhV7WbZMikcK8as"

# 总访问量/访客（统计近 7 天：since/until 用 UTC 时间）
curl -sS --get "https://api.vercel.com/v1/query/web-analytics/visits/count" \
  -H "Authorization: Bearer $TOKEN" \
  --data-urlencode "teamId=$TEAM" \
  --data-urlencode "projectId=prj_LxO4hKyZ9KZAX6QYkx0kb0p3T9ub"

# 每日趋势（按天分组）
curl -sS --get "https://api.vercel.com/v1/query/web-analytics/visits/aggregate" \
  -H "Authorization: Bearer $TOKEN" \
  --data-urlencode "teamId=$TEAM" \
  --data-urlencode "projectId=prj_LxO4hKyZ9KZAX6QYkx0kb0p3T9ub" \
  --data-urlencode "since=YYYY-MM-DDT00:00:00.000Z" \
  --data-urlencode "until=YYYY-MM-DDT23:59:59.000Z" \
  --data-urlencode "by=day"
```

- 每个站分别查询上面的接口（替换 projectId）。
- 网络访问若被沙盒拦截，向用户申请网络权限（curl 已有多数情况下被允许的规则），申请被拒就在报告里注明"网络受限，数据未拉取"并给出 Vercel 控制台链接，不要编造数字。
- 报告里给出：页面浏览量、独立访客、每日趋势摘要、与前一周对比（如有上周报告存档可对比，否则注明"首次报告"）。

## 数据源 2（可选补充）：PostHog（测试链接点击数 + 访问时长）
- PostHog 项目 551516，控制台 https://us.posthog.com/project/551516
- Project API Key（只能上报、不能查询）：phc_BCWUKxtAPPAKKxrnaeXEcNZ4VhV75FCuN9AcNdBLoTCr
- **查询 API 使用 Personal API Key（phx_ 开头，已配置，见下文 PERSONAL_KEY，实测 query:read + insight:read 可用）**：
  `POST https://us.i.posthog.com/api/projects/551516/query/`，Header `Authorization: Bearer <phx_ key>`。
  body 必须是 JSON 对象（直接传 SQL 字符串会报 parse_error），两种格式均可：
  - Insights 查询：`{"query":{"kind":"EventsNode","event":"test_link_clicked","dateRange":{"date_from":"-7d"}}}`
  - HogQL：`{"query":{"kind":"HogQLQuery","query":"SELECT count() AS total, countIf(event = 'test_link_clicked') AS clicks FROM events"}}`
- 统计口径：
  - 事件 `test_link_clicked`，按链接分别统计：willychina.com/mandarin-level-test（中文水平测试）、hskcharcount.online（HSK 字数统计）
  - 平均访问时长：session/engagement 聚合，无数据就注明"暂无时长数据"
- 实测（2026-08-11）：项目内 6 个事件、5 个独立用户，`test_link_clicked` 目前为 0，周报里持续观察即可。

### Personal Key 配置
PERSONAL_KEY 从本机读取（不入库）：`cat ~/.codex/keys/posthog-personal-key`（600 权限，勿外传）

## 报告格式（中文，Markdown）
- 标题：Lydia 的网站周报（第 X 周，YYYY-MM-DD ~ YYYY-MM-DD）
- 两个站各一节：访问量、独立访客、每日趋势、环比上周（无上周数据注明"首次报告"）
- Mandarin 站额外一节：资源库测试链接点击次数（Personal Key 已配置，用上文 HogQL 查询 `test_link_clicked`）
- 结尾一句总结：哪个站增长/下滑、值得关注的异常
- 数字保留合理精度

## 输出
- 在 Scheduled 收件箱输出报告正文（主要交付物）
- 同时保存完整报告到 `~/Documents/ChatGPT/New project/weekly-reports/weekly-report-YYYY-MM-DD.md`
- 数据不足也要给出说明和查看入口，不要跳过
