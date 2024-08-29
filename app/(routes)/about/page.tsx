import React from 'react'
import { columns } from '../_components/Datatable/columns'
import { DataTable } from '../_components/Datatable/data-table'

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      product: "veri var",
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    // ...
  ]
}

const AboutPage = async () => {
  const data = await getData()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    author: "osmanerdemkilic",
    isPublished: true,
    tags: ["web development", "nextjs", "mobile development", "shopify development"]
  }
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="container mx-auto py-10 border mt-10 rounded-xl dark:border-slate-600">
        <DataTable columns={columns} data={data} />
      </div>
    </>
  )
}

export default AboutPage
