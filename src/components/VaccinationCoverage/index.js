// Write your code here
import './index.css'
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
} from 'recharts'

const VaccinationCoverage = props => {
  const {last_7_days_vaccination} = props
  console.log(last_7_days_vaccination)

  const DataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }

  return (
    <ResponsiveContainer width="80%" height={200}>
      <BarChart data={last_7_days_vaccination}>
        <XAxis
          dataKey={last_7_days_vaccination.vaccine_date}
          tick={{stroke: '#ffffff', strokeWidth: 1}}
        />
        <YAxis
          tick={{stroke: '#ffffff', strokeWidth: 1}}
          tickFormatter={DataFormatter}
        />
        <Legend
          wrapperStyle={{padding: 30}}
          layout="horizontal"
          align="center"
        />
        <Bar dataKey="dose_1" name="Dose 1" fill="#2cc6c6" barSize="15%" />
        <Bar dataKey="dose_2" name="Dose 2" fill="#f54394" barSize="15%" />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default VaccinationCoverage
