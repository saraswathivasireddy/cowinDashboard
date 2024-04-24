// Write your code here
import './index.css'
import {ResponsiveContainer, Pie, PieChart, Legend, Cell} from 'recharts'

const VaccinationByGender = props => {
  const {vaccination_by_gender} = props
  return (
    <ResponsiveContainer width="90%" height={400}>
      <PieChart>
        <Pie
          cx="50%"
          cy="40%"
          startAngle={0}
          endAngle={180}
            data={vaccination_by_gender}
          innerRadius="30%"
          outerRadius="70%"
          dataKey="count"
        >
          <Cell name="Male" fill="#f54394" />
          <Cell name="Female" fill="#5a8dee" />
          <Cell name="Others" fill="#2cc6c6" />
        </Pie>
        <Legend iconType="circle" />
      </PieChart>
    </ResponsiveContainer>
  )
}

export default VaccinationByGender
