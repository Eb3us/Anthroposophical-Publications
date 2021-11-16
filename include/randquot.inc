<?$vfil="/home/rsarchive/Steiner/Quotes/rsquotes.dat";
  $qt=file($vfil); srand(date("s"));$rnd=rand()%count($qt);
  $quot=strtok($qt[$rnd],"|");$auth=strtok("|");$frm=strtok("|");
  if(!$cr) $cr=date("Y");
  echo <<<EOF
<!-- ...................................................................... -->
<!-- Name: Steiner/Quotes/index.php                 Copyright (c) 1990-$cr -->
<!-- Desc: Steiner Quotes Page Document                     The e.Lib, Inc. -->
<!-- ...................................................................... -->
 <p align="justify" style="margin: 16px 16px 16px 16px">
  <em><font size="+1">$quot</font></em><br>
  <div align="right" style="margin: 0px 16px 0px 0px"><font size="-1">&#8212; <b>$auth</b><br>
  [$frm]</font></div>
 </p>

EOF;
?>
