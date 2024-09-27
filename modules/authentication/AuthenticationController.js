import { AuthenticationUseCase } from "./AuthenticationUseCase.js";

export class AuthenticationController {
  async handle(request, response) {
    const {email,password} = request.body
    console.log(email)
    if (password.length < 5) {
      return response.status(400).json({
        error: "senha inválida",
      });
    }
    const authenticationUseCase = new AuthenticationUseCase()
    const result = await authenticationUseCase.execute({
        email,
        password
    })
    return response.json(result)
  }
  
}
