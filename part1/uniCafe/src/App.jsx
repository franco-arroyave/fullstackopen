import { useState } from 'react'

const Button = ({handlerClk,text}) => {
  return <button onClick={handlerClk}>{text}</button>
}

const Statistics = ({statistics}) => {
  return (
    <div>
      <h1>Statistics</h1>
      <p>Good: {statistics.good}</p>
      <p>Neutral: {statistics.neutral}</p>
      <p>Bad: {statistics.bad}</p>
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
