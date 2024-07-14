import styled from "styled-components"

const Container = styled.div`
 display: flex;
`

const Panel = styled.div`
 flex: 1;
`

interface Props {
	Left: React.ComponentType<any>
	Right: React.ComponentType<any>
}

export default function SplitScreen({ Left, Right }: Props) {
	return (
		<Container>
			<Panel>
				<Left />
			</Panel>
			<Panel>
				<Right />
			</Panel>
		</Container>
	)
}
