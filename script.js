function add_screen(calc_input)
{

    document.getElementById("Screen").value+=calc_input
    
}
function clrscreen()
{
    document.getElementById("Screen").value=""
}
function eq_button()
{
    let new_var=document.getElementById('Screen').value
    if(new_var==0)
    {
        document.getElementById('Screen').value=''
    }
    else
    {
    document.getElementById('Screen').value=eval(new_var)
    }
}