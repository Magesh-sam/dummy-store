import useFetchCategories from '../hooks/UseFetchCategories';
import type { Category } from '../lib/types';
import { Link } from 'react-router-dom';

const CategoryList = () => {
    const { isLoading, isError, error, categories } = useFetchCategories();

    if (isLoading) {
        return <p className="text-white">Loading...</p>
    }

    if (isError) {
        return (
            <div className="text-white">
                <p>Error: {error?.message || 'Failed to load categories'}</p>
            </div>
        )
    }

    if (!categories || categories.length === 0) {
        return <p className="text-white">No categories found</p>
    }

    return (
        <ul className='flex flex-col gap-3'>
            {categories.map((c: Category) => (
                <li key={c.slug || c.url}>
                    <Link
                        to={c.url}
                        className=" hover:underline block py-1"
                    >
                        {c.name}
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default CategoryList