import React, { useState, useEffect } from 'react'
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

interface DashboardData {
  totalPatrimony: number
  thisMonthIncome: number
  thisMonthExpense: number
  result: number
  accountsBalance: { name: string; balance: number }[]
  categoryExpense: { name: string; value: number }[]
  upcomingBills: { id: string; description: string; dueDate: string; amount: number }[]
}

export default function Dashboard() {
  const [data, setData] = useState<DashboardData>({
    totalPatrimony: 539.32,
    thisMonthIncome: 29.47,
    thisMonthExpense: 19.47,
    result: 10.0,
    accountsBalance: [
      { name: 'Sicoob Sindicato', balance: 0.0 },
      { name: 'Sicoob Luiz', balance: 806.68 },
      { name: 'Caixa Sindicato', balance: 201.0 },
      { name: 'Luiz Eduardo', balance: 0.0 },
    ],
    categoryExpense: [
      { name: 'Serviços', value: 400 },
      { name: 'Anuidades', value: 300 },
      { name: 'DAEs', value: 200 },
      { name: 'Outras', value: 100 },
    ],
    upcomingBills: [
      { id: '1', description: 'Anuidade - João Silva', dueDate: '2024-09-15', amount: 150.0 },
      { id: '2', description: 'GTA - Maria Santos', dueDate: '2024-09-20', amount: 250.0 },
    ],
  })

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
  const monthlyData = [
    { month: 'Jan', receita: 2400, despesa: 1400 },
    { month: 'Feb', receita: 3210, despesa: 1398 },
    { month: 'Mar', receita: 2290, despesa: 9800 },
    { month: 'Apr', receita: 2000, despesa: 9800 },
    { month: 'May', receita: 2181, despesa: 7800 },
    { month: 'Jun', receita: 2500, despesa: 7300 },
  ]

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Gestor Financeiro</h1>
          <p className="text-gray-600 mt-2">Sindicato Rural de Três Corações</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-gray-600 text-sm font-medium">Patrimônio Total</div>
            <div className="text-3xl font-bold text-green-600 mt-2">R$ {data.totalPatrimony.toFixed(2)}</div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-gray-600 text-sm font-medium">Receitas - Setembro</div>
            <div className="text-3xl font-bold text-green-600 mt-2">R$ {data.thisMonthIncome.toFixed(2)}</div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-gray-600 text-sm font-medium">Despesas - Setembro</div>
            <div className="text-3xl font-bold text-red-600 mt-2">R$ {data.thisMonthExpense.toFixed(2)}</div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-gray-600 text-sm font-medium">Resultado - Setembro</div>
            <div className={`text-3xl font-bold mt-2 ${data.result >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              R$ {data.result.toFixed(2)}
            </div>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Receitas vs Despesas */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Receitas vs Despesas</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="receita" fill="#10b981" />
                <Bar dataKey="despesa" fill="#ef4444" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Distribuição por Categoria */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Despesas por Categoria</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={data.categoryExpense}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  <Cell fill="#ef4444" />
                  <Cell fill="#f97316" />
                  <Cell fill="#eab308" />
                  <Cell fill="#6366f1" />
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Accounts Balance */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Saldo das Contas</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {data.accountsBalance.map((account) => (
              <div key={account.name} className="border rounded-lg p-4">
                <div className="text-gray-600 text-sm">{account.name}</div>
                <div className="text-2xl font-bold text-green-600 mt-2">R$ {account.balance.toFixed(2)}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Bills */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Próximos Vencimentos</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 px-4 font-semibold">Descrição</th>
                  <th className="text-left py-2 px-4 font-semibold">Vencimento</th>
                  <th className="text-right py-2 px-4 font-semibold">Valor</th>
                </tr>
              </thead>
              <tbody>
                {data.upcomingBills.map((bill) => (
                  <tr key={bill.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4">{bill.description}</td>
                    <td className="py-3 px-4">{new Date(bill.dueDate).toLocaleDateString('pt-BR')}</td>
                    <td className="text-right py-3 px-4 font-semibold text-red-600">R$ {bill.amount.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
