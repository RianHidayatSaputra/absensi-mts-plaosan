import Logo from '../images/sima.png'

export default function ApplicationLogo(props) {
    return (
        <div className='d-flex justify-center'>
            <img src={Logo} alt="Logo" className='img-fluid px-3 logo py-2 rounded-md bg-indigo-700' />
        </div>
    );
}
