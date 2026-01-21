import useFetchCategories from '../hooks/useFetchCategories';
import type { Category } from '../lib/types';
import { Link, useLocation } from 'react-router-dom';
import CategorySkeleton from './skeletons/CategorySkeleton';

const CategoryList = () => {
    const { pathname } = useLocation();
    const { isLoading, isError, error, categories } = useFetchCategories();

    if (isLoading) {
        return <CategorySkeleton />
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
            <li>
                <Link
                    to={`/products`}
                    className={` transition-all block p-1 hover:bg-blue-400 rounded-sm ${'/products' === pathname ? 'bg-blue-400' : ''}`}
                >
                    All
                </Link>
            </li>
            {categories.map((c: Category) => (
                <li key={c.slug || c.url}>
                    <Link
                        to={`/products/${c.slug}`}
                        className={` transition-all block p-1 hover:bg-blue-400 rounded-sm ${'/products/' + c.slug === pathname ? 'bg-blue-400' : ''}`}
                    >
                        {c.name}
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default CategoryList