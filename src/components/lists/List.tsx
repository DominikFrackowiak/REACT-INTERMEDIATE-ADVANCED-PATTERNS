import { Author } from '../../Types'

interface Props {
	items: Author[]
	ItemListComponent: React.ComponentType<{ author: Author }>
}

export default function List({ items, ItemListComponent }: Props) {
	return (
		<>
			{items.map((item, i) => (
				<ItemListComponent key={i} author={item} />
			))}
		</>
	)
}
