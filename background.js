var current_theme = '';

const theme = 
{
	images:
	{
		headerURL: 'one-punch-man.png',
  },
	colors: 
	{
		accentcolor: '#d8d200',
    textcolor: '#ffffff',
  }
};

function
set_theme()
{
	if (current_theme == theme)
		return;

  current_theme = theme;
  browser.theme.update (theme);
}


// On start up, check the time to see what theme to show.
set_theme ();
