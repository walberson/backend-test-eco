export class AuthenticationUseCase {
    async execute (data){
        
        //* AQUI VERIFICAMOS SE O USUÁRIO EXISTE NO BANCO
        //! BANCO DE DADOS
        const user = {
            email:"walberson.mv@gmail.com",
            password: "123456"
        }
        if (data !== user){
            throw new Error("Credenciais incorretas")
        }
        //* PODEMOS VERIFICAR SE O USUÁRIO É VÁLIDO E SE ELE ESTÁ ATIVO OU NÃO

        //* VERIFICAR SE A SENHA DO USUÁRIO COINCIDE COM A SENHA DO BANCO E SE É VÁLIDA


        function generateToken (){
            const token = '123'
            return token
        }


        return {
            success:"usuário autenticado com sucesso!"
        }
    }
}