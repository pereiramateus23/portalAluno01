export interface JwtPayload {
  email: string;
  sub: string; // geralmente o ID do usuário
}
