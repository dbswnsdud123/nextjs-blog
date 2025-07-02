type DescriptionProps = {
  title: string
  description: string
}

export default function Description(props: DescriptionProps) {
  return (
    <>
      <p className="w-[50px]">{props.title}</p>
      <p className="mr-4 ml-4"></p>
      <p>{props.description}</p>
    </>
  )
}
