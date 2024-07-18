import { Author } from '../../Types'

interface Props {
	items: Author[]
	sourceName: string
	ItemListComponent: React.ComponentType<{ author: Author }>
}

export default function List({ items, sourceName, ItemListComponent }: Props) {
	return (
		<>
			{items.map((item, i) => (
				<ItemListComponent key={i} author={item} />
			))}
		</>
	)
}
