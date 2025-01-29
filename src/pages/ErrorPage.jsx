import { Link } from "react-router-dom";

export default function ErrorPage(){
    return (
        <div className="pt-20 text-center w-full">
            <h2 className="text-4xl">Pagina non trovata</h2>
            <p>Torna alla <Link to="/" className="border-b-2 border-black text-slate-600">home</Link></p>
        </div>
    )
}