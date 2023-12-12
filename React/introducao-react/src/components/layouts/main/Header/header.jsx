import logo from "../../../../assets/Images/logo-digital.png.webp"
import avatar from "../../../../assets/Images/avatar.png"

export function Header() {

    return (
        <div className="flex justify-between px-10 items-center bg-sky-900 py-4">
        <div>
            <img className="w-32" src={logo} alt="Logo da Digital" />
        </div>
        <div className="flex gap-3 items-center">
            {/* <box-icon type='solid' name='sushi'></box-icon> */}
            <img className="w-9" src={avatar} alt="Avatar do Dono do Site" />
            <p className="text-white">Olá, Samuel</p>
        </div>
        </div>
    )
}

