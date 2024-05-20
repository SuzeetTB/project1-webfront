import { formatAmount } from "@/lib/utils"
import AnimationCounter from "./AnimationCounter"
import DoughnutChart from "./DoughnutChart"

const TotalBalanceBox = (props: TotlaBalanceBoxProps) => {
  return (
    <section className="total-balance">
        <div className="total-balance-chart">
            <DoughnutChart accounts={props.accounts}/>
        </div>

        <div className="flex flex-col gap-6">
            <h2 className="header-2">Bank Accounts: {props.totalBanks}</h2>
            <div className="flex flex-col gap-2">
                <p className="total-balance-label flex-center">
                    TOTAL CURRENT BALANCE:
                </p>
                <div className="total-balance-amount flex-center gap-2">
                    <AnimationCounter amount={props.totalCurrentBalance}/>
                    {/* {formatAmount(props.totalCurrentBalance)} */}
                </div>
            </div>
        </div>
    </section>
  )
}

export default TotalBalanceBox