import styled from 'styled-components'

interface PanelProps {
	flex?: number
}

interface Props {
	leftWidth: number
	rightWidth: number
	children: [React.ReactElement, React.ReactElement]
}

const Container = styled.div`
	display: flex;
`

const Panel = styled.div<PanelProps>`
	flex: ${props => props.flex};
`

export default function SplitScreen({
	leftWidth = 1,
	rightWidth = 1,
	children,
}: Props) {
	return (
		<Container>
			<Panel flex={leftWidth}>{children[0]}</Panel>
			<Panel flex={rightWidth}>{children[1]}</Panel>
		</Container>
	)
}
