<?session_start();
define('SCRIPT_BY_SIRGOFFAN',dirname(__FILE__));
include(dirname(__FILE__).'/core/ini.php');
include(dirname(__FILE__).'/core/cache.php');

$page = $_GET['page'];
define( 'ROOT', 'http://'.$_SERVER['HTTP_HOST'] );
define( 'ROOT_DIR', $_SERVER['DOCUMENT_ROOT'] );

/*---�������� �������---*/
if ( $_GET['func'] == 'addavatar' ) {
 if ( !isset( $_SESSION['id'] ) ) exit();

    if ( !$_FILES['addavatar']['name'] ) {
        echo '�� �� ������� �������';
        exit();
    } else
    if ( $_FILES["addavatar"]["size"] <= 0 and $_FILES["addavatar"]["size"] > 200 * 1024 ) {
        echo '����������� ������ ������� 200 ��.!';
        exit();
    } else
    if ( $_FILES['addavatar']['type'] != 'image/jpg' and  $_FILES['addavatar']['type'] != 'image/jpeg' and $_FILES['addavatar']['type'] != 'image/png' and $_FILES['addavatar']['type'] != 'image/gif') {
        echo '�������� ������ �����������!';
        exit();
    } else
    if ( is_uploaded_file( $_FILES["addavatar"]["tmp_name"] ) ) {
        $imgwh = GetImageSize( $_FILES["addavatar"]["tmp_name"] );

        if ( $imgwh[0] > 100 or $imgwh[1] > 100 or $imgwh[0] < 100 or $imgwh[1] < 100 ) {
            echo '���������� ������ ������� 100 � 100!';
            exit();
        } else {
            $type_file = str_replace("theme/tmp/", "", basename($_FILES['addavatar']['type']));

            if ( $avatar != 'no.png' ) {
                unlink( ROOT_DIR . '/temp/avatar/' . $avatar );
            }

            if ( @move_uploaded_file( $_FILES['addavatar']['tmp_name'], "temp/avatar/" . $_SESSION["id"] . "avatar." . $type_file ) ) {
                $db->query( "UPDATE ss_users SET avatar = '" . $_SESSION['id'] . "avatar." . $type_file . "' WHERE id='" . $_SESSION['id'] . "'" );
                echo 1;
                exit();
            } else {
                echo '��������� ���������� ������! ���������� �����!';
                exit();
            }
        }
    } else {
        echo '��������� ���������� ������! ���������� �����!';
        exit();
    }

}

include('templ/main/head.php');
if(isset($page)){
if(file_exists(dirname(__FILE__)."/pages/".$page.".php")){
include(dirname(__FILE__)."/pages/".$page.'.php');
}else{
include(dirname(__FILE__).'/pages/404.php');
}
}else{
include(dirname(__FILE__).'/pages/main.php');
}
include('templ/main/foot.php');

