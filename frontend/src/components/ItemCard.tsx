import { Heart } from 'lucide-react'

type ItemCardProps = {
  title: string
  price: string
  location: string
  date: string
  imageUrl: string
}

export function ItemCard({
  title,
  price,
  location,
  date,
  imageUrl,
}: ItemCardProps) {
  return (
    <article className="w-full max-w-[300px] rounded-2xl bg-white">
      <div className="relative overflow-hidden rounded-2xl">
        <img
          src={imageUrl}
          alt={title}
          className="h-[220px] w-full object-cover"
          loading="lazy"
        />
        <button
          type="button"
          aria-label="Добавить в избранное"
          className="absolute bottom-3 right-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-gray-500 shadow-sm transition hover:text-red-500"
        >
          <Heart size={20} />
        </button>
      </div>

      <div className="px-1 pt-4">
        <h3 className="text-2xl font-semibold leading-tight text-[#2f6fdd]">
          {title}
        </h3>
        <p className="mt-2 text-2xl font-bold text-[#101a47]">{price}</p>
        <p className="mt-3 text-lg text-gray-400">{location}</p>
        <p className="text-lg text-gray-400">{date}</p>
      </div>
    </article>
  )
}
