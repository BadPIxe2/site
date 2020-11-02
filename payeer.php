<?
define('SCRIPT_BY_SIRGOFFAN',dirname(__FILE__));
require_once('core/classes/safemysql.php');
require_once('core/config.php');
require_once('core/classes/competition.php');

require_once('core/functions.php');
$cmnt="none";

$sum=$_POST['m_amount']; 
$id=intval($_POST['m_orderid']);

if (isset($_POST['m_operation_id']) && isset($_POST['m_sign']))
{
	$arHash = array($_POST['m_operation_id'],
			$_POST['m_operation_ps'],
			$_POST['m_operation_date'],
			$_POST['m_operation_pay_date'],
			$_POST['m_shop'],
			$_POST['m_orderid'],
			$_POST['m_amount'],
			$_POST['m_curr'],
			$_POST['m_desc'],
			$_POST['m_status'],
			$m_key);
	$sign_hash = strtoupper(hash('sha256', implode(':', $arHash)));
if ($_POST['m_sign'] == $sign_hash && $_POST['m_status'] == 'success')
{

$sql = $pdo->Query("SELECT * FROM db_payeer_insert WHERE id = '".intval($_POST['m_orderid'])."'")->fetch();
if(empty($sql[id])){ echo $_POST['m_orderid']."|error"; exit;}
if($sql["status"] > 0){ echo $_POST['m_orderid']."|success"; exit;}
$pdo->Query("UPDATE db_payeer_insert SET status = '1' WHERE id = '".intval($_POST['m_orderid'])."'");
$id=$sql[user_id];
$competition = new competition($pdo);
$competition->UpdatePoints($id, $sum);
$referer=$db->getOne("SELECT curator FROM `ss_users` WHERE id=?i", $id);
$pdo->Query("UPDATE ss_users SET psum = psum+'$sum' WHERE id = '".$id."'");
$db->query("INSERT INTO deposits (userid, curatorid, summa, unixtime) VALUES(?i,?i,?s,?s)", $id, $referer, $sum, time());	
addpay($id, "Пополнение баланса", $sum);
whithdraw('Выплата админских от проекта '.$sitename.'',0,''.$koshelek_admina.'',($sum*($admpercent/100)));		

//Затем рефские.
$refererwallet=strtoupper($db->getOne("SELECT wallet FROM `ss_users` WHERE id=?i", $referer));
$referersum=$sum*($refpercent/100);
if($referer>0 && $refererwallet[0]=='P'){
$pdo->Query("UPDATE ss_users SET cursum = cursum+'$referersum' WHERE id = '".$referer."'");
whithdraw('Выплата реферальных от проекта '.$sitename.'',$referer,$refererwallet,$referersum);		
addUserStat($referer, "<!--stat--><!--whithdraw--><!--fromreferal-->Выплата", "<!--stat--><!--whithdraw--><!--fromreferal-->Выплата реферальных  (".$referersum." руб.)");
addpay($referer, "Выплата реферальных", $referersum);
}

echo $_POST['m_orderid'].'|success';
exit;
}
echo $_POST['m_orderid'].'|error';

}
?>