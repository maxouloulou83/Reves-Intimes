import React from 'react';


const posts = [
    {
        title: 'bien être',
        href: '#',
        category: { name: 'Article', href: '#' },
        description:
            'Un esthétisme saisissant pour des masturbateurs aux allures d\'œuvre d\'art !!\n' +
            'Avec sa nouvelle gamme Geo, @tenga_global offre aux hommes une masturbation à la fois douce et stimulante grâce à ses formes géométriques inspirées de la nature.',
        date: '11 juin, 2021',
        datetime: '2020-03-16',
        imageUrl:
            'https://limg.app/i/0QFy6I.png',
        readingTime: '6 min',
        author: {
            name: 'Rêves Intimes\n',
            href: '#',
            imageUrl:
                'https://limg.app/i/9XPHaF.jpeg',
        },
    },
    {
        title: 'cosmétiques françaises',
        href: '#',
        category: { name: 'Video', href: '#' },
        description:
            '@yesforlov_official Les cosmétiques françaises d\'excellence au service de l\'amour ' +
            '' +
            'Parfumerie, maquillage ou soins de beauté, la France regorge des produits cosmétiques fabriqués dans nos régions',
        date: '5 mai, 2021',
        datetime: '2020-03-10',
        imageUrl:
            'https://limg.app/i/M1fNcS.jpeg',
        readingTime: '4 min',
        author: {
            name: 'Rêves Intimes\n',
            href: '#',
            imageUrl:
                'https://limg.app/i/9XPHaF.jpeg',
        },
    },
    {
        title: 'bien être',
        href: '#',
        category: { name: 'Témoignages', href: '#' },
        description:
            'Le saviez vous ? La masturbation peut aider à élever notre humeur !!\n' +
            'L\'excitation qui en résulte libère des endorphines...hormones du bien être \n' +
            'On dit Merci Womanizer de prendre soin de nous !!!',
        date: '8 decembre, 2020',
        datetime: '2020-02-12',
        imageUrl:
            'https://limg.app/i/O16GsE.png',
        readingTime: '11 min',
        author: {
            name: 'Daniela Metz',
            href: '#',
            imageUrl:
                'https://limg.app/i/9XPHaF.jpeg',
        },
    },
]

export default function Header() {



    return (

        <div className="relative bg-gradient-to-r from-red-400 to-blue-600 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
            <div className="absolute inset-0">
                <div className="bg-gradient-to-r from-red-400 to-blue-600 h-1/3 sm:h-2/3" />
            </div>
            <div className="relative max-w-7xl mx-auto">
                    <h2 className="text-center text-3xl font-extrabold text-gray-50 tracking-tight sm:text-4xl">
                        Nouveauté
                    </h2>
                <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                    {posts.map((post) => (
                        <div key={post.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                            <div className="flex-shrink-0">
                                <img className="h-48 w-full object-cover" src={post.imageUrl} alt="" />
                            </div>
                            <div id="News" className="flex-1 bg-white p-6 flex flex-col justify-between">
                                <div className="flex-1">
                                    <p className="text-sm font-medium text-indigo-600">
                                        <a href={post.category.href} className="hover:underline">
                                            {post.category.name}
                                        </a>
                                    </p>
                                    <a href={post.href} className="block mt-2">
                                        <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                                        <p className="mt-3 text-base text-gray-500">{post.description}</p>
                                    </a>
                                </div>
                                <div className="mt-6 flex items-center">
                                    <div className="flex-shrink-0">
                                        <a href={post.author.href}>
                                            <span className="sr-only">{post.author.name}</span>
                                            <img className="h-10 w-10 rounded-full" src={post.author.imageUrl} alt="" />
                                        </a>
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-sm font-medium text-gray-900">
                                            <a href={post.author.href} className="hover:underline">
                                                {post.author.name}
                                            </a>
                                        </p>
                                        <div className="flex space-x-1 text-sm text-gray-500">
                                            <time dateTime={post.datetime}>{post.date}</time>
                                            <span aria-hidden="true">&middot;</span>
                                            <span>{post.readingTime} read</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
