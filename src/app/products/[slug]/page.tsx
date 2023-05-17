interface ProductProps {
  params: {
    slug: string
  }
}

export default function Product({ params }: ProductProps) {
  const { slug } = params
  return (
    <div className="flex flex-col items-center justify-center w-full">
      Products Page<div></div>
      {`Param = ${slug}`}
    </div>
  )
}
