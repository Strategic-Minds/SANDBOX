# Autonomous Backlog Engine V1 — Economic Simulation Receipt

Date: 2026-08-20
Classification: SIMULATION ONLY — not customer revenue, not a production claim.

## Purpose
Prove the scoring and attribution logic behaves economically rather than selecting the largest contract by face value.

## Synthetic opportunity ranking
| Rank | Opportunity | Contract value | Expected gross profit | Value score |
|---|---|---:|---:|---:|
| 1 | School Polished Concrete | $225,000 | $26,460 | 20.77 |
| 2 | Warehouse Polished Concrete | $310,000 | $32,984 | 20.44 |
| 3 | Parking Garage Deck Coating | $420,000 | $37,632 | 18.03 |
| 4 | Small Retail Epoxy Floor | $65,000 | $9,100 | 17.05 |
| 5 | Airport Resinous Flooring | $760,000 | $34,048 | 9.04 |

The $760K airport package ranks last because lower win probability, higher pursuit cost, and higher risk reduce expected value. This confirms the engine is optimizing pursuit economics rather than contract face value alone.

## Synthetic attribution scenario
- Opportunity value discovered: $1,780,000
- Qualified opportunity value: $535,000
- Bids prepared: 2
- Synthetic awarded backlog: $310,000
- Synthetic realized gross profit: $74,400
- Synthetic platform + AI + browser cost: $5,900
- Synthetic ROI: 12.61x
- Cost per bid: $2,950
- Cost per awarded dollar: $0.0190

## Guardrail
None of these values may appear as actual ARR, backlog, customer savings, awards, or ROI. Real attribution requires customer_id + opportunity_id + bid_id + independent award evidence, and realized-profit claims require actual financial evidence.

## Validation result
PASS for scoring behavior and attribution arithmetic. Real-world commercial validation remains required.
