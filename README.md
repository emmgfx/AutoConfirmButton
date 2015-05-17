# AutoConfirmButton for jQuery

Allow you to convert simple buttons into a useful buttons with double click confirmation. It's a low level security idea for non destructive actions. You can use it for something like delete replaceable things (photos, comments, draft copy...). Don't use it for a ``rm -frv /``, etc.

## Examples:

### Basic:

	$('button').AutoConfirmButton();

### With an action before the confirm:

    $('button').AutoConfirmButton({
        onConfirm: function(btn){
            // The btn variable makes reference to the button jQuery element.
            setTimeout(function(){      // Two seconds before...
                btn.slideUp(function(){ // ...hide the button...
                    $(this).remove();   // ...and remove it.
                });
            }, 2000);
        }
    });

## Options:

Name            | Default value | Info
---             | ---           | ---
textConfirm     | Sure?         | The text shown at the first click.
textConfirmed   | test          | The text shown before the confirmation.
classConfirm    | btn-danger    | A class added at the first click
classStandby    | btn-warning   | The standby class (return to this after the cancelTime)
disableOnConfirm| true          | Disable the button after the confirm
cancelTime      | 2000          | Max. time between the first and second click
onConfirm       |               | Callback for the confirm action