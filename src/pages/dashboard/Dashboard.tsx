import { BarraDeFerramentas } from "../../shared/components/barra-de-ferramentas/BarraDeFerramentas";
import { LayoutBaseDePagina } from "../../shared/layouts/LayoutBaseDePagina";


export const Dashboard = () => {

    return (
        <LayoutBaseDePagina 
            titulo='Página inicial' 
            barraDeFerramentas={(
                <BarraDeFerramentas 
                    mostrarInputBusca
                />
            )}
        >
            Testando
        </LayoutBaseDePagina>
    );
};