import { Author } from '../../Types'

interface Props {
	author: Author
}

export default function SmallAuthorsListItems({ author }: Props) {
	return (
		<div>
			<h2>{author.name}</h2>
			<p>Age: {author.age}</p>
			<p>Country: {author.country}</p>
			<p>Books: {author.books.join(', ')}</p>
		</div>
	)
}
