import styled from 'styled-components'

export const CustomContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`
export const Container = styled(CustomContainer)`
  width: 800px;
  height: 800px;
  justify-content: space-between;
`

export const FormContainer = styled(CustomContainer)`
  width: 400px;
  height: 600px;
  flex-direction: column;
`
export const Heading = styled.h1`
  color: #1e293b;
  font-size: 30px;
  font-family: 'Roboto';
`

export const CustomForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const Label = styled.label`
  font-size: 16px;
  margin-bottom: 5px;
  color: #7e858e;
  font-family: 'Roboto';
`

export const Input = styled.input`
  color: #7e858e;
  font-size: 16px;
  border-color: #d7dfe9;
  border-radius: 5px;
  outline: none;
  margin-bottom: 12px;
  padding: 5px;
  font-family: 'Roboto';
`

export const Button = styled.button`
  color: #ffffff;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  background-color: #0b69ff;
  padding: 5px;
  font-family: 'Roboto';
`

export const ImageContainer = styled(CustomContainer)`
  background-image: url(${props => props.imgUrl});
  background-size: cover;
  flex-direction: column;
  justify-content: space-between;
  width: 400px;
  height: 400px;
`
export const MemeText = styled.p`
  color: #ffffff;
  font-weight: 500;
  font-size: ${props => props.font}px;
`
