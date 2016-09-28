import { isValidEmail } from '../validators'


describe('validators', () => {

  describe('isValidEmail[boolean]: value[string]', () => {

    it('should not valid email list', () => {
      const invalidEmails = [
        'test@',
        'test@localhost',
        'test@localhost@',
        'test'
      ]
      invalidEmails.map(email => expect(isValidEmail(email)).toEqual(false))
    })

    it('should valid email list', () => {
      const validEmails = [
        'test.test@provedor.com',
        'test@provedor.com.br',
        'test@provedor.org',
        'test@provedor.br'
      ]
      validEmails.map(email => expect(isValidEmail(email)).toEqual(true))
    })
  })

})
