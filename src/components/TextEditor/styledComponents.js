import styled from 'styled-components'

import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

export const TextEditorMainContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #25262c;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const TextContainer = styled.div`
  height: 80vh;
  width: 85vw;
  background-color: #1b1c22;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
`
export const InsideLeftContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`
export const TextEditorHeading = styled.h1`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 40px;
`
export const TextEditorImage = styled.img`
  height: 70%;
  width: 80%;
`
export const InsideRightContainer = styled.div`
  height: 90%;
  width: 50%;
  background-color: #25262c;
  border-radius: 10px;
  border: 1px solid #cbd5e1;
  display: flex;
  flex-direction: column;
`
export const IconsContainer = styled.ul`
  list-style-type: none;
  height: 15%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`
export const LiElement = styled.li`
  margin-left: 10px;
`
export const ButtonElement = styled.button`
  height: 40px;
  width: 40px;
  background-color: inherit;
  outline: none;
  border-width: 0px;
  color: ${props => props.color};
`
export const BoldIcon = styled(VscBold)`
  font-size: 35px;
  cursor: pointer;
`
export const ItalicIcon = styled(GoItalic)`
  font-size: 35px;
  cursor: pointer;
`
export const UnderLineIcon = styled(AiOutlineUnderline)`
  font-size: 35px;
  cursor: pointer;
`
export const Separator = styled.hr`
  width: 100%;
  border: 1px solid #cbd5e1;
`
export const TextAreaElement = styled.textarea`
  width: 100%;
  height: 88%;
  background-color: inherit;
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 18px;
  font-weight: ${props => props.fontWeight};
  font-style: ${props => props.fontStyle};
  text-decoration: ${props => props.textDecoration};
`
