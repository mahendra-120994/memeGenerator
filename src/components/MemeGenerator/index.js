import {Component} from 'react'

import {
  CustomContainer,
  Container,
  FormContainer,
  CustomForm,
  Heading,
  Label,
  Input,
  Button,
  ImageContainer,
  MemeText,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {
    imgUrl: '',
    topText: '',
    bottomText: '',
    activeId: fontSizesOptionsList[0].optionId,
    isSubmit: false,
  }

  submitData = event => {
    event.preventDefault()
    this.setState({isSubmit: true})
  }

  enterUrl = event => {
    this.setState({imgUrl: event.target.value})
  }

  enterTopText = event => {
    this.setState({topText: event.target.value})
  }

  enterBottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  enterFonSize = event => {
    this.setState({activeId: event.target.value})
  }

  render() {
    const {imgUrl, topText, bottomText, activeId, isSubmit} = this.state
    return (
      <CustomContainer data-testid="meme">
        <Container>
          <FormContainer>
            <CustomForm onSubmit={this.submitData}>
              <Heading>Meme Generator</Heading>
              <Label htmFor="imgUrl">Image URL</Label>
              <Input
                type="text"
                id="imgUrl"
                value={imgUrl}
                onChange={this.enterUrl}
                placeholder="Enter the image URL"
              />
              <Label htmFor="topText">Top Text</Label>
              <Input
                type="text"
                id="topText"
                value={topText}
                onChange={this.enterTopText}
                placeholder="Enter the Top Text"
              />
              <Label htmFor="bottomText">Bottom Text</Label>
              <Input
                type="text"
                id="bottomText"
                value={bottomText}
                onChange={this.enterBottomText}
                placeholder="Enter the Bottom Text"
              />
              <Label htmFor="select">Font Size</Label>
              <Input
                as="select"
                type="text"
                id="select"
                onChange={this.enterFonSize}
                value={activeId}
              >
                {fontSizesOptionsList.map(e => (
                  <option key={e.optionId} value={e.optionId}>
                    {e.displayText}
                  </option>
                ))}
              </Input>
              <Button type="submit">Generate</Button>
            </CustomForm>
          </FormContainer>
          {isSubmit && (
            <ImageContainer imgUrl={imgUrl} data-testid="meme">
              <MemeText font={activeId}>{topText}</MemeText>
              <MemeText font={activeId}>{bottomText}</MemeText>
            </ImageContainer>
          )}
        </Container>
      </CustomContainer>
    )
  }
}

export default MemeGenerator
