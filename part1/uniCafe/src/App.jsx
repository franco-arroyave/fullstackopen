import { useState } from 'react'

const Button = ({handlerClk,text}) => {
  return <button onClick={handlerClk}>{text}</button>
}

const StatisticLine = ({text,value}) => {
  return (
    <>
    {text}: {value}
    <br/>
    </>
  )
}

const Statistics = ({statistics}) => {
  const total = statistics.bad+statistics.good+statistics.neutral
  if (total == 0) {
    return(
      <div>
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }
  const avrg = (statistics.good-statistics.bad)/total
  const positive = (statistics.good/total)*100
  return (
    <div>
      <h1>Statistics</h1>
      <div>
        <StatisticLine text={"Good"} value={statistics.good}/>
        <StatisticLine text={"Neutral"} value={statistics.neutral}/>
        <StatisticLine text={"Bad"} value={statistics.bad}/>
        <StatisticLine text={"All"} value={total}/>
        <StatisticLine text={"Average"} value={avrg}/>
        <StatisticLine text={"Positive"} value={positive+"%"}/>
      </div>
    </div>
  )
}

const App =() => {
  const [statistics, setStatistics] = useState(
    {
      good:0,
      neutral:0,
      bad:0
    }
  )

  const handler = (stat) => {
    return (
      () => {
        const stats = {...statistics}
        stats[stat] = stats[stat]+1
        setStatistics(stats)
      }
    )
  }

  return (
    <>
      <h1>Give feedback</h1>
      <Button handlerClk={handler("good")} text={"Good"}/>
      <Button handlerClk={handler("neutral")} text={"Neutral"}/>
      <Button handlerClk={handler("bad")} text={"Bad"}/>
      <Statistics statistics={statistics}/>
    </>
  )
}

export default App
