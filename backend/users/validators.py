def validate_name(name):
    from django.core.exceptions import ValidationError
    ban_words = ['XDD','abc','blm']
    for word in ban_words:
        if word in name:
            raise ValidationError('Forbidden words in name')
        
def validate_email( email ):
    from django.core.validators import validate_email
    from django.core.exceptions import ValidationError
    try:
        validate_email( email )
        return True
    except ValidationError:
        raise ValidationError('Invalid e-mail address')