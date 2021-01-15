
# LearnIt ReadMe
1. [Reusable Components](#Reusable-components)
    * [ErrorMessage](#ErroMessage)
    * [SlideScreen](#SlideScreen)
    * [WordForm](#WordForm)


\
\
\
\
~

# Reusable components

## ErrorMessage
**message** *String*  

```javascript
import ErrorMessage from 'components/ErrorMessage';

<ErrorMessage message="Something went wrong" />
```
~

## SlideScreen

```javascript
import SlideScreen from 'components/SlideScreen'
import { toggleSlide } from 'actions/utils'

<Button title="close" onPress={toggleSlide}>

<SlideScreen>
    <ComponentToBeSlided />
</SlideScreen>
```
~

## WordForm
**headerText** *String* <br>
**buttonText** *String* <br>
**onSubmit** *Function* <br>
**editWord** *optional String* <br>
**editTranslation** *optional String*

```javascript
import WordForm from 'components/WordForm'

<WordForm />
```

