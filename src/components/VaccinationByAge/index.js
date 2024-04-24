// Write your code here
import './index.css'
import {ResponsiveContainer, Pie, PieChart, Legend, Cell} from 'recharts'

const VaccinationByAge = props => {
  const {vaccination_by_age} = props
  console.log(vaccination_by_age)
  return (
    <ResponsiveContainer width="90%" height={400}>
      <PieChart>
        <Pie
          cx="50%"
          cy="40%"
          startAngle={0}
          data={vaccination_by_age}
          endAngle={360}
          innerRadius="0%"
          outerRadius="70%"
          dataKey="count"
        >
          <Cell name="18-44" fill="#f54394" />
          <Cell name="44-60" fill="#5a8dee" />
          <Cell name="Above 60" fill="#2cc6c6" />
        </Pie>
        <Legend iconType="circle" />
      </PieChart>
    </ResponsiveContainer>
  )
}

export default VaccinationByAge
