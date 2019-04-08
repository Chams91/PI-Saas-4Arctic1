/*
@license
dhtmlxScheduler.Net v.4.0.1 Professional Evaluation

This software is covered by DHTMLX Evaluation License. Contact sales@dhtmlx.com to get Commercial or Enterprise license. Usage without proper license is prohibited.

(c) Dinamenta, UAB.
*/
Scheduler.plugin(function(e){e.__recurring_template='<div class="dhx_form_repeat"> <form> <div class="dhx_repeat_left"> <label><input class="dhx_repeat_radio" type="radio" name="repeat" value="day" />День</label><br /> <label><input class="dhx_repeat_radio" type="radio" name="repeat" value="week"/>Неделя</label><br /> <label><input class="dhx_repeat_radio" type="radio" name="repeat" value="month" checked />Месяц</label><br /> <label><input class="dhx_repeat_radio" type="radio" name="repeat" value="year" />Год</label> </div> <div class="dhx_repeat_divider"></div> <div class="dhx_repeat_center"> <div style="display:none;" id="dhx_repeat_day"> <label><input class="dhx_repeat_radio" type="radio" name="day_type" value="d"/>Каждый</label><input class="dhx_repeat_text" type="text" name="day_count" value="1" />день<br /> <label><input class="dhx_repeat_radio" type="radio" name="day_type" checked value="w"/>Каждый рабочий день</label> </div> <div style="display:none;" id="dhx_repeat_week"> Повторять каждую<input class="dhx_repeat_text" type="text" name="week_count" value="1" />неделю , в:<br /> <table class="dhx_repeat_days"> <tr> <td> <label><input class="dhx_repeat_checkbox" type="checkbox" name="week_day" value="1" />Понедельник</label><br /> <label><input class="dhx_repeat_checkbox" type="checkbox" name="week_day" value="4" />Четверг</label> </td> <td> <label><input class="dhx_repeat_checkbox" type="checkbox" name="week_day" value="2" />Вторник</label><br /> <label><input class="dhx_repeat_checkbox" type="checkbox" name="week_day" value="5" />Пятницу</label> </td> <td> <label><input class="dhx_repeat_checkbox" type="checkbox" name="week_day" value="3" />Среду&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label><br /> <label><input class="dhx_repeat_checkbox" type="checkbox" name="week_day" value="6" />Субботу</label> </td> <td> <label><input class="dhx_repeat_checkbox" type="checkbox" name="week_day" value="0" />Воскресенье</label><br /><br /> </td> </tr> </table> </div> <div id="dhx_repeat_month"> <label><input class="dhx_repeat_radio" type="radio" name="month_type" value="d"/>Повторять</label><input class="dhx_repeat_text" type="text" name="month_day" value="1" /> числа каждый <input class="dhx_repeat_text" type="text" name="month_count" value="1" />месяц<br /> <label><input class="dhx_repeat_radio" type="radio" name="month_type" checked value="w"/></label><input class="dhx_repeat_text" type="text" name="month_week2" value="1" /><select name="month_day2"><option value="1" selected >Понедельник<option value="2">Вторник<option value="3">Среда<option value="4">Четверг<option value="5">Пятница<option value="6">Суббота<option value="0">Воскресенье</select>каждый <input class="dhx_repeat_text" type="text" name="month_count2" value="1" />месяц<br /> </div> <div style="display:none;" id="dhx_repeat_year"> <label><input class="dhx_repeat_radio" type="radio" name="year_type" value="d"/></label><input class="dhx_repeat_text" type="text" name="year_day" value="1" />день<select name="year_month"><option value="0" selected >Января<option value="1">Февраля<option value="2">Марта<option value="3">Апреля<option value="4">Мая<option value="5">Июня<option value="6">Июля<option value="7">Августа<option value="8">Сентября<option value="9">Октября<option value="10">Ноября<option value="11">Декабря</select><br /> <label><input class="dhx_repeat_radio" type="radio" name="year_type" checked value="w"/></label><input class="dhx_repeat_text" type="text" name="year_week2" value="1" /><select name="year_day2"><option value="1" selected >Понедельник<option value="2">Вторник<option value="3">Среда<option value="4">Четверг<option value="5">Пятница<option value="6">Суббота<option value="0">Воскресенье</select><select name="year_month2"><option value="0" selected >Января<option value="1">Февраля<option value="2">Марта<option value="3">Апреля<option value="4">Мая<option value="5">Июня<option value="6">Июля<option value="7">Августа<option value="8">Сентября<option value="9">Октября<option value="10">Ноября<option value="11">Декабря</select><br /> </div> </div> <div class="dhx_repeat_divider"></div> <div class="dhx_repeat_right"> <label><input class="dhx_repeat_radio" type="radio" name="end" checked/>Без даты окончания</label><br /> <label><input class="dhx_repeat_radio" type="radio" name="end" /></label><input class="dhx_repeat_text" type="text" name="occurences_count" value="1" />повторений<br /> <label><input class="dhx_repeat_radio" type="radio" name="end" />До </label><input class="dhx_repeat_date" type="text" name="date_of_end" value="'+e.config.repeat_date_of_end+'" /><br /> </div> </form> </div> <div style="clear:both"> </div>';
});