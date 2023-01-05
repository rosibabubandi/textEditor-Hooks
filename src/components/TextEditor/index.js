import {useState} from 'react'

import {
  TextEditorMainContainer,
  TextContainer,
  InsideLeftContainer,
  TextEditorHeading,
  TextEditorImage,
  InsideRightContainer,
  IconsContainer,
  LiElement,
  ButtonElement,
  BoldIcon,
  ItalicIcon,
  UnderLineIcon,
  Separator,
  TextAreaElement,
} from './styledComponents'

const TextEditor = () => {
  const [boldStatusActive, setBoldStatusActive] = useState(false)
  const [italicStatusActive, setItalicStatusActive] = useState(false)
  const [decorationStatusActive, setDecorationStatusActive] = useState(false)

  return (
    <TextEditorMainContainer>
      <TextContainer>
        <InsideLeftContainer>
          <TextEditorHeading>Text Editor</TextEditorHeading>
          <TextEditorImage
            src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
            alt="text editor"
          />
        </InsideLeftContainer>
        <InsideRightContainer>
          <IconsContainer>
            <LiElement>
              <ButtonElement
                type="button"
                data-testid="bold"
                onClick={() => setBoldStatusActive(!boldStatusActive)}
                color={boldStatusActive ? '#faff00' : '#f1f5f9'}
              >
                <BoldIcon />
              </ButtonElement>
            </LiElement>
            <LiElement>
              <ButtonElement
                type="button"
                data-testid="italic"
                onClick={() => setItalicStatusActive(!italicStatusActive)}
                color={italicStatusActive ? '#faff00' : '#f1f5f9'}
              >
                <ItalicIcon />
              </ButtonElement>
            </LiElement>
            <LiElement>
              <ButtonElement
                type="button"
                data-testid="underline"
                onClick={() =>
                  setDecorationStatusActive(!decorationStatusActive)
                }
                color={decorationStatusActive ? '#faff00' : '#f1f5f9'}
              >
                <UnderLineIcon />
              </ButtonElement>
            </LiElement>
          </IconsContainer>
          <Separator />
          <TextAreaElement
            rows="100"
            cols="100"
            fontWeight={boldStatusActive ? 'bold' : 'normal'}
            fontStyle={italicStatusActive ? 'italic' : 'normal'}
            textDecoration={decorationStatusActive ? 'underline' : 'normal'}
          />
        </InsideRightContainer>
      </TextContainer>
    </TextEditorMainContainer>
  )
}

export default TextEditor
