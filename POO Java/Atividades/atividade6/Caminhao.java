package atv6;

public class Caminhao extends Veiculo{
	String placa;
	public Caminhao(String marca, String modelo, int rodas, String placa) {
		super(marca, modelo, rodas);
		this.placa=placa;
		
	}
	public void ligar() {
		System.out.println("O caminhao "+ modelo + "foi ligado");
		
	}
	public void desligar() {
		System.out.println("O caminhao"+ modelo + " foi desligado");
		
	}
	public void abastecer() {
		System.out.println("O caminhao"+ modelo + "foi abastecido");
	}
	
	@Override
	public void info() {
		System.out.println("Caminhao:");
		System.out.println("Marca "+ marca);
		System.out.println("Modelo"+ modelo);
		System.out.println("Placa"+ placa);
		System.out.println("Rodas"+ rodas);
	}
}