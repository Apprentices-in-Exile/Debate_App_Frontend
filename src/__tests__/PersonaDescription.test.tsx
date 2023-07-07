import renderer from 'react-test-renderer'
import PersonaDescription from '../components/PersonaDescription/PersonaDescription'

describe('PersonaDescription', () => {
  it('should match the snapshot', () => {
    const tree = renderer.create(<PersonaDescription persona={{
      imageURL: 'imageURL',
      name: 'Name',
      description: 'Description'
    }} />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
