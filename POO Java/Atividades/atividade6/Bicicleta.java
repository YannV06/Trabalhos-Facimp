package atv6;

public class Bicicleta extends Veiculo {

	public Bicicleta(String marca, String modelo) {
		super(marca, modelo,2);
		
	}
	@Override
	public void acelerar() {
		System.out.println("Bicicleta "+ modelo + "pedalar");
	}

}
