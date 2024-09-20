package atv6;

public class Main {

	public static void main(String[] args) {
		Carro carro= new Carro("Honda"," Civic G10", "4058" );
		carro.info();
		Bicicleta bicicleta= new Bicicleta("BMX"," Strider");
		bicicleta.info();
		Caminhao caminhao= new Caminhao(" Volvo"," FH 240",6 ," FEF 458");
		caminhao.info();
	}

}

