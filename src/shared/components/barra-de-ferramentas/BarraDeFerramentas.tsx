import { Box, Button, Icon, Paper, TextField, useTheme } from "@mui/material";

interface IBarraDeFerramentasProps {
    textoDaBusca?: string;
    mostrarInputBusca?: boolean;
    aoMudarTextoDeBusca?: (novoTexto: string) => void;
    textoBotaoNovo?: string;
    mostrarBotaoNovo?: boolean;
    aoClicarEmNovo?: () => void;
}

export const BarraDeFerramentas = ({ 
    aoMudarTextoDeBusca,
    mostrarInputBusca = false,
    textoDaBusca = '',
    aoClicarEmNovo,
    mostrarBotaoNovo = true,
    textoBotaoNovo = 'Novo',
    }:IBarraDeFerramentasProps) => {
    const theme = useTheme();

    return (
        <Box 
            gap={1}
            marginX={1} 
            padding={1} 
            paddingX={2}
            paddingY={4} 
            display='flex'
            alignItems='center'
            justifyContent='space-between'
            height={theme.spacing(5)} 
            component={Paper}
        >
            {mostrarInputBusca && (
                <TextField
                    size="small"
                    placeholder="Pesquisar..."
                    value={textoDaBusca}
                    onChange={(event) => aoMudarTextoDeBusca?.(event.target.value)}
                />
            )}

            {mostrarBotaoNovo && (
                <Button
                    variant='contained'
                    color='primary'
                    disableElevation
                    endIcon={<Icon>add</Icon>}
                    onClick={aoClicarEmNovo}
                >
                    {textoBotaoNovo}
                </Button>
            )}
        </Box>
    );
};