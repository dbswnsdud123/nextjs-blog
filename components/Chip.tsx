type ChipProps = {
  text: string
}

export default function Chip(props: ChipProps) {
  return (
    <>
      <div className="flex h-[30px] w-fit items-center rounded-[4px] bg-yellow-300 px-[8px]">
        <p className="text-[14px] text-[#0a0c12]">{props.text}</p>
      </div>
    </>
  )
}
