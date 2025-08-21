import { Link } from "@inertiajs/react"

const Pagination = ({links}) => {
    return (
        <nav className="text-center -mt-4">
            {
                links.map((link, i) => {
                    link.active ? localStorage.setItem('pageAct', link.label)  : ''
                    // console.log(localStorage.getItem('pageAct'))
                    return <Link
                        key={i}
                        href={link.url+"&paginate="+localStorage.getItem('pag') || ""}
                        preserveScroll
                        dangerouslySetInnerHTML={{__html: link.label}}
                        className={"inline-block py-2 px-3 rounded-lg text-xs " + (link.active ? " bg-gray-300 text-black " : " ") + (!link.url ? "!text-gray-500 cursor-not-allowed " : "hover:bg-gray-200")}
                    />
                })
            }
        </nav>
    )
}

export default Pagination