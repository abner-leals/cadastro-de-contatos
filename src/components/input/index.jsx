import { Container, ContTitulo, InputContainer } from "./styles";

function Input({
  label,
  register,
  name,
  error,
  icon: Icon,
  texto,
  typebotao,
  botaoclick,
  ...rest
}) {
  return (
    <Container>
      <ContTitulo>
        {label} {!!error && <span> - {error} </span>}
      </ContTitulo>

      <InputContainer isErrored={!!error}>
        <input {...register(name)} {...rest} />
        {texto && (
          <button onClick={botaoclick} type={typebotao}>
            {texto}
          </button>
        )}
      </InputContainer>
    </Container>
  );
}

export default Input;
