interface MarginProps {
	height: number
}

export default function Margin({ height }: MarginProps) {
	return <div style={{ marginBottom: `${height}px` }} />
}
