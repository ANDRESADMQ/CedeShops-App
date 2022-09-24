import { Page } from "../../components/Page";

export const Login = () => (
    <Page>
        <h1>Iniciar sesión</h1>
        <form>
            <div>
                <label>Correo electrónico</label>
                <input type="email"/>    
            </div>
            <div>
                <label>Contraseña</label>
                <input type="password"/>    
            </div>
            <div>
                <button>Ingresar</button>
            </div>
        </form>
    </Page>
);